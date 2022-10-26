const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth')

//get all Posts
router.get('/', (req, res) => {
    Post.findAll().then((postData => res.json(postData)))
});


//get one Post by ID
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User
            }]
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' })
        }
        // res.status(200).json(postData);
        // console.log('postData:', postData);
        let post = postData.dataValues
        res.render('view-post', {
            post,
            loggedIn: req.session.loggedIn,
            currentUser: req.session.username
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Add new post
router.post('/', async (req, res) => {
    try {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        })
        res.status(200).json({ message: 'Post added successfully' })
    } catch (err) {
        res.status(500).json(err)
    }
})


// Delete post
router.delete('/:id', async (req, res) => {

    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({ message: "dummy response" })
    // .then(data => {
    //     if (!data){
    //         res.status(404).json({message: 'No post found with that id'})
    //     }
    //     res.status(200).json(res)
    // })
    // .catch (err => {
    // res.status(500).json(res)
    // })
})

module.exports = router
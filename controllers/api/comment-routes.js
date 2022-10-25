const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth')

//get all comments
router.get('/', (req, res) => {
    Post.findAll().then((postData => res.json(postData)))
});

//get all comments by **post_id**

router.get('/:postid', (req, res) => {
    Comment.findAll({
        where: {
            post_id: post_id
        }
    })
        .then((commentData) => res.json(commentData))
        .catch(err => res.status(500).json(err))
})

//get one comment by ID
router.get('/comment/:id', async (req, res) => {
    try {
        const commentData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User
            }]
        });
        if (!commentData) {
            res.status(404).json({ message: 'No post found with this id' })
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err)
    }
})

// create comment
router.post('/', async (req, res) => {
    try {
        Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        res.status(200).json({ message: 'Comment added successfully' })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router
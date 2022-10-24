const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

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
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router
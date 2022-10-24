const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//get all Posts
router.get('/', (req, res) => {
    Post.findAll().then((postData => res.json(postData)))
});


//TODO: I've routed something wrong, and cannot GET api/post/anything as a result. /api/post works.
//get one Post by ID
// router.get('/:id', (req, res) => {
//     console.log('Route working');
//     res.json({ message: 'Route working' })
// })

router.get('/:id', (req, res) => {
    Post.findAll().then((postData => res.json(postData)))
})


// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Post.findOne({
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!postData) {
//             res.status(404).json({ message: 'No post found with this id' })
//         }
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })
module.exports = router
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


//Get all Posts where the user_id matches the logged in user's
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            //TODO: session does not currently have a user_id - How to give it one?
            user_id: req.session.user_id
        }
    })
        .then((postData => {
            const posts = postData.map(post => post.get({ plain: true }));
            res.render('dashboard', {
                posts,
                loggedIn: true
            })
        }))
    // let session = req.session
    // res.json({
    //     message: 'Dashboard',
    //     session
    // })
})
module.exports = router;
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');


//Get all Posts where the user_id matches the logged in user's
router.get('/', (req, res) => {
    res.render('submit-post', {
        user_id: req.session.user_id
    })
})
module.exports = router;
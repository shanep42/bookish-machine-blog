const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');


// Render post submission page view, passing along the current user_id
router.get('/', (req, res) => {
    res.render('submit-post', {
        user_id: req.session.user_id
    })
})
module.exports = router;
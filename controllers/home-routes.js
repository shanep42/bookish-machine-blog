const router = require('express').Router();
const { User, Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {

    //TODO: When we pass "posts" to the homepage it appears to be empty. I'm pretty sure the problem is here.
    const postData = await Post.findAll();
    const posts = postData.map((x) => x.get({plain: true}));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

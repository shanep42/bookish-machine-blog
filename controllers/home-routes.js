const router = require('express').Router();
const { User, Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map((x) => x.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Get one post
// router.get('/post/:id', async (req, res) => {
//   const postData = await Post.findByPk({
//     where: {
//       id: req.params.id
//     },
//   });
//   const post = postData.get({ plain: true })
//   res.json(post)
// })

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

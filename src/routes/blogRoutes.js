const express = require('express');

const blogController = require('../controllers/blogController.js');

const blogRouter = express.Router();

function router(nav) {
  const { getPosts, getPost } = blogController(nav);
  blogRouter.route('/')
    .get(getPosts);

  blogRouter.route('/post/:id')
    .get(getPost);

  return blogRouter;
}

module.exports = router;

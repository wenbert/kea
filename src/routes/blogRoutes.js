const express = require('express');

const blogController = require('../controllers/blogController.js');

const blogRouter = express.Router();
const middleware = require('../middlewares/verifyToken');

function router(nav) {
  blogRouter.use(middleware);
  const { getPosts, getPost } = blogController(nav);
  blogRouter.route('/')
    .get(getPosts);

  blogRouter.route('/post/:id')
    .get(getPost);

  return blogRouter;
}

module.exports = router;

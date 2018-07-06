const express = require('express');

const mainController = require('../controllers/mainController.js');

const mainRouter = express.Router();

// const middleware = require('../middlewares/verifyToken');

function router(nav) {
  const {
    getIndex,
    getAbout,
    getLogin,
  } = mainController(nav);
  // mainRouter.use(middleware);
  mainRouter.route('/')
    .get(getIndex);

  mainRouter.route('/pages/about')
    .get(getAbout);

  mainRouter.route('/pages/login')
    .get(getLogin);

  return mainRouter;
}

module.exports = router;

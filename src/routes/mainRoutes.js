const express = require('express');

const mainController = require('../controllers/mainController.js');

const mainRouter = express.Router();

function router(nav) {
  const {
    // middleware,
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

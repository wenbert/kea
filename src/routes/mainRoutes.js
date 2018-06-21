const express = require('express');

const mainController = require('../controllers/mainController.js');

const mainRouter = express.Router();

function router(nav) {
  const { getIndex } = mainController(nav);
  mainRouter.route('/')
    .get(getIndex);
  return mainRouter;
}

module.exports = router;

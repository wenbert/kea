const express = require('express');

const loginController = require('../controllers/loginController.js');

const loginRouter = express.Router();

function router() {
  const { login } = loginController();
  loginRouter.route('/')
    .post(login);


  return loginRouter;
}

module.exports = router;

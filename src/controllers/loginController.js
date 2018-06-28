const debug = require('debug')('app:loginController');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function loginController() {
  function login(req, res) {
    const { username, password } = req.body;
    (async function mongo() {
      try {
        const user = await User.findOne({ username });

        // TODO check encrypted and not plain text
        // TODO refresh token
        if (user.password !== password) {
          res.json({ success: false, message: 'Authentication failed.' });
        } else {
          const payload = {
            admin: user.admin,
          };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: process.env.TOKEN_EXPIRES_IN,
          });

          res.json({
            success: true,
            message: 'Here is the token',
            token,
          });
        }
      } catch (err) {
        debug(err.stack);
      }
    }());
  }

  return {
    login,
  };
}

module.exports = loginController;

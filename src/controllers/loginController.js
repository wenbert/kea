const debug = require('debug')('app:loginController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

function loginController() {
  function login(req, res) {
    (async function mongo() {
      try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const matches = await bcrypt.compare(password, user.password);
        if (matches) {
          const payload = {
            admin: user.admin,
          };
          const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
          });

          res.json({
            success: true,
            message: 'Here is the token',
            token,
          });
        } else {
          res.json({ success: false, message: 'Authentication failed.' });
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

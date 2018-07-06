const jwt = require('jsonwebtoken');
const debug = require('debug')('app:verifyToken');

module.exports = function verify(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ error: true });
      }
      req.decoded = decoded;
      debug('Congrats token has been verified!');
      next();
      return true;
    });
  } else {
    debug('No token from cookies.');
    return res.status(403).send({
      error: true,
      message: 'No token',
    });
  }
  return false;
};

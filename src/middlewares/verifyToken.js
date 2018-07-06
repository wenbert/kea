const jwt = require('jsonwebtoken');
const debug = require('debug')('app:verifyToken');

module.exports = function verify(req, res, next) {
  // const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ error: true });
      }
      req.decoded = decoded;
      debug('Welcome decoded JWT: ');
      debug(req.decoded.username);
      debug(req.decoded.admin);
      debug('End decoded JWT.');

      // TODO verify expiry

      // TODO check if user exists in DB?

      // Or....

      // TODO what more checks can we do?
      // Do we store the token generated in some kind of persisten storage?
      // And check in persistent storage if token exists there?
      // ie: Redis, MySQL, MongoDB

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

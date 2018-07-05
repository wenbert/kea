const jwt = require('jsonwebtoken');

module.exports = function verify(req, res, next) {
  // TODO this would be for client side - ie: API, returns JSON
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ error: true });
      }
      req.decoded = decoded;
      next();
      return true;
    });
  } else {
    return res.status(403).send({
      error: true,
    });
  }
  return false;
};

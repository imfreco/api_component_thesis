const { JWT_SECRET } = require('../config');
const { generateErrorHelper } = require('../helpers');

module.exports = (req, res, next) => {
  const id_token = req.headers['authorization'];

  if (!id_token) {
    //user not identified, so, no authenticated
    generateErrorHelper(401, 'La autenticación es requerida');
  }

  jwt.verify(id_token, JWT_SECRET, (err, payload) => {
    if (err) {
      //invalid id_token
      generateErrorHelper(401, 'La autenticación es requerida');
    }

    res.locals.user = payload.user;
    res.locals.authenticated = true;
    next();
  });
};

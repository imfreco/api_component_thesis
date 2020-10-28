const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (payload, options) => {
  return sign(payload, JWT_SECRET, options);
};

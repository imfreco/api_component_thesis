const { validationResult } = require('express-validator');
const { generateErrorHelper } = require('../helpers');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : generateErrorHelper(400, errors.mapped());
};

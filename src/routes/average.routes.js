const { Router } = require('express');
const { authenticationMiddleware } = require('../middlewares');

module.exports = function ({ AverageController }) {
  const router = Router();

  router.get('/', [authenticationMiddleware], AverageController.getAll);

  return router;
};

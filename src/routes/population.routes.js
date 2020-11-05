const { Router } = require('express');
const { authenticationMiddleware } = require('../middlewares');

module.exports = function ({ PopulationController }) {
  const router = Router();

  router.get('/', [authenticationMiddleware], PopulationController.getAll);

  return router;
};

const { Router } = require('express');
const {
  authenticationMiddleware,
  authorizationMiddleware,
} = require('../middlewares');

module.exports = function ({ PopulationController }) {
  const router = Router();

  router.get(
    '/',
    [authenticationMiddleware, authorizationMiddleware],
    PopulationController.getAll
  );

  return router;
};

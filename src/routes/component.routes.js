const { Router } = require('express');
const { authenticationMiddleware } = require('../middlewares');

module.exports = function ({ ComponentController }) {
  const router = Router();

  router.get('/', [authenticationMiddleware], ComponentController.getAll);

  router.post('/', [authenticationMiddleware], ComponentController.create);

  return router;
};

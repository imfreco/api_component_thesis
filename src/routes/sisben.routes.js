const { Router } = require('express');
const { authenticationMiddleware } = require('../middlewares');

module.exports = function ({ SisbenController }) {
  const router = Router();

  router.get('/', [authenticationMiddleware], SisbenController.getAll);

  return router;
};

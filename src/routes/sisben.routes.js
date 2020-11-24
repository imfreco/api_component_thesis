const { Router } = require('express');
const {
  authenticationMiddleware,
  authorizationMiddleware,
} = require('../middlewares');

module.exports = function ({ SisbenController }) {
  const router = Router();

  router.get(
    '/',
    [authenticationMiddleware, authorizationMiddleware],
    SisbenController.getAll
  );

  return router;
};

const { Router } = require('express');
const { authenticationMiddleware } = require('../middlewares');

module.exports = function ({ MenuController }) {
  const router = Router();

  router.post(
    '/',
    [authenticationMiddleware],
    MenuController.createMenuWithDetails
  );

  return router;
};

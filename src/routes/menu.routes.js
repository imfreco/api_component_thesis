const { Router } = require('express');
const {
  authenticationMiddleware,
  authorizationMiddleware,
  validationsMiddleware,
} = require('../middlewares');
const { createSchema } = require('../schemas/menu.schema');

module.exports = function ({ MenuController }) {
  const router = Router();

  router.post(
    '/',
    [
      authenticationMiddleware,
      authorizationMiddleware,
      createSchema,
      validationsMiddleware,
    ],
    MenuController.createMenuWithDetails
  );

  return router;
};

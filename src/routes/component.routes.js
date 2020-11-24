const { Router } = require('express');
const {
  authenticationMiddleware,
  authorizationMiddleware,
  validationsMiddleware,
} = require('../middlewares');
const { createSchema } = require('../schemas/component.schema');

module.exports = function ({ ComponentController }) {
  const router = Router();

  router.get(
    '/',
    [authenticationMiddleware, authorizationMiddleware],
    ComponentController.getAll
  );

  router.post(
    '/',
    [
      authenticationMiddleware,
      authorizationMiddleware,
      createSchema,
      validationsMiddleware,
    ],
    ComponentController.create
  );

  return router;
};

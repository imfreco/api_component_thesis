const { Router } = require('express');
const {
  authenticationMiddleware,
  validationsMiddleware,
} = require('../middlewares');
const { createSchema } = require('../schemas/component.schema');

module.exports = function ({ ComponentController }) {
  const router = Router();

  router.get('/', [authenticationMiddleware], ComponentController.getAll);

  router.post(
    '/',
    [authenticationMiddleware, createSchema, validationsMiddleware],
    ComponentController.create
  );

  return router;
};

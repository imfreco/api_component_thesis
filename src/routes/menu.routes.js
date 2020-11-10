const { Router } = require('express');
const {
  authenticationMiddleware,
  validationsMiddleware,
} = require('../middlewares');
const { createSchema } = require('../schemas/menu.schema');

module.exports = function ({ MenuController }) {
  const router = Router();

  router.post(
    '/',
    [createSchema, validationsMiddleware],
    MenuController.createMenuWithDetails
  );

  return router;
};

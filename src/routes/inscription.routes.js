const { Router } = require('express');
const {
  authenticationMiddleware,
  authorizationMiddleware,
  validationsMiddleware,
} = require('../middlewares');
const {
  createSchema,
  readSchema,
  updateSchema,
  deleteSchema,
} = require('../schemas/inscription.schema');

module.exports = function ({ InscriptionController }) {
  const router = Router();

  router.get(
    '/',
    [authenticationMiddleware, authorizationMiddleware],
    InscriptionController.getAll
  );
  router.get(
    '/:userId',
    [
      authenticationMiddleware,
      authorizationMiddleware,
      readSchema,
      validationsMiddleware,
    ],
    InscriptionController.getByUserId
  );

  router.post(
    '/',
    [
      authenticationMiddleware,
      authorizationMiddleware,
      createSchema,
      validationsMiddleware,
    ],
    InscriptionController.create
  );

  router.patch(
    '/admit/:inscriptionId',
    [
      authenticationMiddleware,
      authorizationMiddleware,
      updateSchema,
      validationsMiddleware,
    ],
    InscriptionController.patchAdmit
  );

  router.delete(
    '/:inscriptionId',
    [
      authenticationMiddleware,
      authorizationMiddleware,
      deleteSchema,
      validationsMiddleware,
    ],
    InscriptionController.delete
  );

  return router;
};

const { Router } = require('express');
const {
  authenticationMiddleware,
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

  router.get('/', [authenticationMiddleware], InscriptionController.getAll);
  router.get(
    '/:userId',
    [authenticationMiddleware, readSchema, validationsMiddleware],
    InscriptionController.getByUserId
  );

  router.post(
    '/',
    [authenticationMiddleware, createSchema, validationsMiddleware],
    InscriptionController.create
  );

  router.patch(
    '/admit/:inscriptionId',
    [authenticationMiddleware, updateSchema, validationsMiddleware],
    InscriptionController.patchAdmit
  );

  router.delete(
    '/:inscriptionId',
    [authenticationMiddleware, deleteSchema, validationsMiddleware],
    InscriptionController.delete
  );

  return router;
};

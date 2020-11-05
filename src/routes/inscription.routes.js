const { Router } = require('express');
const { authenticationMiddleware } = require('../middlewares');

module.exports = function ({ InscriptionController }) {
  const router = Router();

  router.get('/', [authenticationMiddleware], InscriptionController.getAll);
  router.get(
    '/:userId',
    [authenticationMiddleware],
    InscriptionController.getByUserId
  );

  router.post('/', [authenticationMiddleware], InscriptionController.create);

  router.patch(
    '/admit/:inscriptionId',
    [authenticationMiddleware],
    InscriptionController.patchAdmit
  );

  router.delete(
    '/:inscriptionId',
    [authenticationMiddleware],
    InscriptionController.delete
  );

  return router;
};

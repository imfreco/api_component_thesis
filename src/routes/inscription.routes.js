const { Router } = require('express');

module.exports = function ({ InscriptionController }) {
  const router = Router();

  router.get('/', InscriptionController.getAll);
  router.get('/:userId', InscriptionController.getByUserId);

  router.post('/', InscriptionController.create);

  router.patch('/admit/:inscriptionId', InscriptionController.patchAdmit);

  return router;
};

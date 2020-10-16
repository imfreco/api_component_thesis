const { Router } = require('express');

module.exports = function ({ ComponentController }) {
  const router = Router();

  router.get('/', ComponentController.getAll);

  router.post('/', ComponentController.create);

  return router;
};

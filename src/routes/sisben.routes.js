const { Router } = require('express');

module.exports = function ({ SisbenController }) {
  const router = Router();

  router.get('/', SisbenController.getAll);

  return router;
};

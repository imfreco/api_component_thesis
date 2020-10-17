const { Router } = require('express');

module.exports = function ({ MenuController }) {
  const router = Router();

  router.post('/', MenuController.createMenuWithDetails);

  return router;
};

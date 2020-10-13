const { Router } = require('express');

module.exports = function ({ PopulationController }) {
  const router = Router();

  router.get('/', PopulationController.getAll);

  return router;
};

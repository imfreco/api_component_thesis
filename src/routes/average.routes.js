const { Router } = require('express');

module.exports = function ({ AverageController }) {
  const router = Router();

  router.get('/', AverageController.getAll);

  return router;
};

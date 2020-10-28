const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

const { notFoundMiddleware, errorMiddleware } = require('../middlewares');

module.exports = function ({
  AverageRoutes,
  SisbenRoutes,
  PopulationRoutes,
  InscriptionRoutes,
  ComponentRoutes,
  MenuRoutes,
  AuthenticationRoutes,
}) {
  const router = express.Router();
  const routing = express.Router();

  routing.use(express.json()).use(cors()).use(helmet()).use(compression());

  routing.use('/average', AverageRoutes);
  routing.use('/sisben', SisbenRoutes);
  routing.use('/population', PopulationRoutes);
  routing.use('/inscription', InscriptionRoutes);
  routing.use('/component', ComponentRoutes);
  routing.use('/menu', MenuRoutes);
  routing.use('/auth', AuthenticationRoutes);

  router.use('/v1/api', routing);

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
};

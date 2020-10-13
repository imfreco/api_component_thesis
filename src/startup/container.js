const { createContainer, asClass, asFunction, asValue } = require('awilix');

// config
const config = require('../config');
const server = require('./');

// routes
const { AverageRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// middlewares

// controllers
const { AverageController } = require('../controllers');

// services
const { AverageService } = require('../services');

// repositories
const { AverageRepository } = require('../repositories');

// database
const db = require('../models');

const container = createContainer();

container
  .register({
    server: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    db: asValue(db),
  })
  .register({
    AverageRoutes: asFunction(AverageRoutes).singleton(),
  })
  .register({
    AverageController: asClass(
      AverageController.bind(AverageController)
    ).singleton(),
  })
  .register({
    AverageService: asClass(AverageService).singleton(),
  })
  .register({
    AverageRepository: asClass(AverageRepository).singleton(),
  });

module.exports = container;

const { createContainer, asClass, asFunction, asValue } = require('awilix');

// config
const config = require('../config');
const server = require('./');

// routes
const {
  AverageRoutes,
  SisbenRoutes,
  PopulationRoutes,
} = require('../routes/index.routes');
const Routes = require('../routes');

// middlewares

// controllers
const {
  AverageController,
  SisbenController,
  PopulationController,
} = require('../controllers');

// services
const {
  AverageService,
  SisbenService,
  PopulationService,
} = require('../services');

// repositories
const {
  AverageRepository,
  SisbenRepository,
  PopulationRepository,
} = require('../repositories');

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
    SisbenRoutes: asFunction(SisbenRoutes).singleton(),
    PopulationRoutes: asFunction(PopulationRoutes).singleton(),
  })
  .register({
    AverageController: asClass(
      AverageController.bind(AverageController)
    ).singleton(),
    SisbenController: asClass(
      SisbenController.bind(SisbenController)
    ).singleton(),
    PopulationController: asClass(
      PopulationController.bind(PopulationController)
    ).singleton(),
  })
  .register({
    AverageService: asClass(AverageService).singleton(),
    SisbenService: asClass(SisbenService).singleton(),
    PopulationService: asClass(PopulationService).singleton(),
  })
  .register({
    AverageRepository: asClass(AverageRepository).singleton(),
    SisbenRepository: asClass(SisbenRepository).singleton(),
    PopulationRepository: asClass(PopulationRepository).singleton(),
  });

module.exports = container;

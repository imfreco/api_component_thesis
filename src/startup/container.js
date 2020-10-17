const { createContainer, asClass, asFunction, asValue } = require('awilix');

// config
const config = require('../config');
const server = require('./');

// routes
const {
  AverageRoutes,
  SisbenRoutes,
  PopulationRoutes,
  InscriptionRoutes,
  ComponentRoutes,
  MenuRoutes,
} = require('../routes/index.routes');
const Routes = require('../routes');

// middlewares

// controllers
const {
  AverageController,
  SisbenController,
  PopulationController,
  InscriptionController,
  ComponentController,
  MenuController,
} = require('../controllers');

// services
const {
  AverageService,
  SisbenService,
  PopulationService,
  InscriptionService,
  ComponentService,
  MenuService,
} = require('../services');

// repositories
const {
  AverageRepository,
  SisbenRepository,
  PopulationRepository,
  InscriptionRepository,
  ComponentRepository,
  MenuRepository,
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
    InscriptionRoutes: asFunction(InscriptionRoutes).singleton(),
    ComponentRoutes: asFunction(ComponentRoutes).singleton(),
    MenuRoutes: asFunction(MenuRoutes).singleton(),
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
    InscriptionController: asClass(
      InscriptionController.bind(InscriptionController)
    ).singleton(),
    ComponentController: asClass(
      ComponentController.bind(ComponentController)
    ).singleton(),
    MenuController: asClass(MenuController.bind(MenuController)).singleton(),
  })
  .register({
    AverageService: asClass(AverageService).singleton(),
    SisbenService: asClass(SisbenService).singleton(),
    PopulationService: asClass(PopulationService).singleton(),
    InscriptionService: asClass(InscriptionService).singleton(),
    ComponentService: asClass(ComponentService).singleton(),
    MenuService: asClass(MenuService).singleton(),
  })
  .register({
    AverageRepository: asClass(AverageRepository).singleton(),
    SisbenRepository: asClass(SisbenRepository).singleton(),
    PopulationRepository: asClass(PopulationRepository).singleton(),
    InscriptionRepository: asClass(InscriptionRepository).singleton(),
    ComponentRepository: asClass(ComponentRepository).singleton(),
    MenuRepository: asClass(MenuRepository).singleton(),
  });

module.exports = container;

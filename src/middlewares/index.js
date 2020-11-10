module.exports = {
  notFoundMiddleware: require('./not.found.middleware'),
  errorMiddleware: require('./error.middleware'),
  authenticationMiddleware: require('./authentication.middleware'),
  authorizationMiddleware: require('./authorization.middleware'),
  validationsMiddleware: require('./validations.middleware'),
};

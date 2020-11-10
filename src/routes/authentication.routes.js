const { Router } = require('express');
const {
  signInSchema,
  getRefreshTokenSchema,
} = require('../schemas/authentication.schema');
const { validationsMiddleware } = require('../middlewares');

module.exports = function ({ AuthenticationController }) {
  const router = Router();

  router.get(
    '/substitution',
    AuthenticationController.getSubstitutionDictionary
  );
  router.get(
    '/refresh',
    [getRefreshTokenSchema, validationsMiddleware],
    AuthenticationController.getRefreshToken
  );

  router.post(
    '/signin',
    [signInSchema, validationsMiddleware],
    AuthenticationController.signIn
  );
  // router.post('/signup', AuthenticationController.signUp);

  return router;
};

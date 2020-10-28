const { Router } = require('express');

module.exports = function ({ AuthenticationController }) {
  const router = Router();

  router.get(
    '/substitution',
    AuthenticationController.getSubstitutionDictionary
  );

  // router.post('/signin', AuthenticationController.signIn);
  // router.post('/signup', AuthenticationController.signUp);

  return router;
};

const { checkSchema } = require('express-validator');

const signInSchema = checkSchema(
  {
    email: {
      isLength: {
        errorMessage:
          'El correo electrónico debe tener al menos 11 caracteres y máximo 60 caracteres',
        options: { min: 11, max: 60 },
      },
    },
    password: {
      isLength: {
        errorMessage: 'La contraseña debe tener 6 caracteres',
        options: { min: 6, max: 6 },
      },
    },
    dict_token: {
      isJWT: {
        errorMessage: 'El diccionario de sustitución no es un JWT',
      },
    },
  },
  ['body']
);

const getRefreshTokenSchema = checkSchema(
  {
    Authorization: {
      isJWT: {
        errorMessage: 'El token recibido no es un JWT',
      },
    },
  },
  ['headers']
);

module.exports = {
  signInSchema,
  getRefreshTokenSchema,
};

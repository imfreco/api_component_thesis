const { checkSchema } = require('express-validator');

const signInSchema = checkSchema(
  {
    email: {
      isEmail: {
        errorMessage: 'El correo electrónico no tiene una estructura correcta',
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

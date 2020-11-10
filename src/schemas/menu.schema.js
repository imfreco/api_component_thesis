const { checkSchema } = require('express-validator');

const createSchema = checkSchema(
  {
    date: {
      isDate: {
        errorMessage: 'La fecha no cumple el formato',
      },
    },
    menuDetails: {
      isArray: {
        errorMessage: 'El menú debe contener al menos un componente',
        options: { min: 1 },
      },
    },
    'menuDetails.*.componentId': {
      isInt: {
        errorMessage:
          'Los identificadores de cada componente deben ser numéricos',
      },
    },
    'menuDetails.*.value': {
      isLength: {
        errorMessage:
          'Los nombres de cada componente deben tener al menos 3 caracteres y máximo 30 caracteres',
        options: { min: 3, max: 30 },
      },
    },
  },
  ['body']
);

module.exports = {
  createSchema,
};

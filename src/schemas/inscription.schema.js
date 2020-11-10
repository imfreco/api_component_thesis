const { checkSchema } = require('express-validator');

const createSchema = checkSchema(
  {
    userId: {
      isInt: {
        errorMessage: 'El identificador del usuario debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
    sisbenId: {
      isInt: {
        errorMessage: 'El identificador del sisben debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
    averageId: {
      isInt: {
        errorMessage: 'El identificador del promedio debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
    populationId: {
      isInt: {
        errorMessage: 'El identificador de la población debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
    state: {
      optional: true,
      isBoolean: {
        errorMessage: 'El estado de la inscripción debe ser un valor booleano',
      },
      //sanitization
      toBoolean: true,
    },
  },
  ['body']
);

const readSchema = checkSchema(
  {
    userId: {
      isInt: {
        errorMessage: 'El identificador del usuario debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
  },
  ['params']
);

const updateSchema = checkSchema(
  {
    inscriptionId: {
      isInt: {
        errorMessage: 'El identificador de la inscripción debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
  },
  ['params']
);

const deleteSchema = checkSchema(
  {
    inscriptionId: {
      isInt: {
        errorMessage: 'El identificador de la inscripción debe ser numérico',
      },
      //sanitization
      toInt: true,
    },
  },
  ['params']
);

module.exports = {
  createSchema,
  readSchema,
  updateSchema,
  deleteSchema,
};

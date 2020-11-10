const { checkSchema } = require('express-validator');

const createSchema = checkSchema(
  {
    name: {
      isLength: {
        errorMessage:
          'El nombre del componente debe tener al menos 3 caracteres y máximo 20 caracteres',
        options: { min: 3, max: 20 },
      },
    },
    description: {
      optional: true,
      isLength: {
        errorMessage:
          'La descripción del componente debe tener al menos 5 caracteres y máximo 1000 caracteres',
        options: { min: 5, max: 1000 },
      },
    },
  },
  ['body']
);

module.exports = {
  createSchema,
};

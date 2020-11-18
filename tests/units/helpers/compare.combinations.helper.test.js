const { hashSync } = require('bcrypt');
const { compareCombinationsHelper } = require('../../../src/helpers');

describe('Pruebas unitarias para la validación de la contraseña sustituida', () => {
  const dictionary = {
    0: ['5', '3', 'Z', 'Ñ'],
    1: ['Y', 'D', 'A'],
    2: ['O', 'B'],
    3: ['V', 'R', 'G', 'E'],
    4: ['8', 'Q', 'I', 'H'],
    5: ['W', 'S', 'P', 'N'],
    6: ['9', 'L', 'K', 'J'],
    7: ['7', '4', '1', 'T'],
    8: ['2', 'X', 'U', 'M'],
    9: ['6', '0', 'F', 'C'],
  };
  const hashpass = hashSync('FRED20', 1);

  test('CP07 - Debería retornar true con las credenciales correctas', () => {
    const password = '933189';

    const isMatched = compareCombinationsHelper(password, dictionary, hashpass);

    expect(isMatched).toBeTruthy();
  });

  test('CP08 - Debería retornar false con las credenciales incorrectas', () => {
    const password = '933188';

    const isMatched = compareCombinationsHelper(password, dictionary, hashpass);

    expect(isMatched).toBeFalsy();
  });
});

const { hashSync } = require('bcrypt');
const { compareCombinationsHelper } = require('../../../src/helpers');

describe('Prueba unitaria para la validación de la contraseña sustituida', () => {
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
  const hashpass = hashSync('FRED20', 1); // simulate seeder in test db

  test('CP04 - Debería retornar una valor de coincidencia según la validez de la contraseña', () => {
    const passwordValid = '933189';
    const passwordInvalid = '933188';

    const isMatched1 = compareCombinationsHelper(
      passwordValid,
      dictionary,
      hashpass
    );
    const isMatched2 = compareCombinationsHelper(
      passwordInvalid,
      dictionary,
      hashpass
    );

    expect(isMatched1).toBeTruthy();
    expect(isMatched2).toBeFalsy();
  });
});

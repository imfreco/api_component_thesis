const { charactersDictionaryFixture } = require('../../../src/fixtures');
const {
  generateSubstitutionDictionaryHelper,
  hasRepeatedItemDictionaryHelper,
} = require('../../../src/helpers');

describe('Prueba unitaria para la generación del diccionario de sustitución', () => {
  test('CP06 - Debería generar un diccionario de sustitución aleatoria con la estructura correcta', () => {
    const dictionary = generateSubstitutionDictionaryHelper();

    /* debe estar formado por una key que hace referencia al valor de sustitución y un
    value que hace referencia al conjunto de valores originales que son sustituidos
    por dicha key */
    expect(dictionary).toEqual({
      0: expect.any(Array),
      1: expect.any(Array),
      2: expect.any(Array),
      3: expect.any(Array),
      4: expect.any(Array),
      5: expect.any(Array),
      6: expect.any(Array),
      7: expect.any(Array),
      8: expect.any(Array),
      9: expect.any(Array),
    });

    /* cada key o valor de sustitución está a cargo de máximo 4 valores originales y 
    estos a su vez deben estar incluidos en el fixture de caracteres del diccionario */
    Object.values(dictionary).forEach((item) => {
      expect(item.length).toBeLessThanOrEqual(4);
      expect(item).toEqual(expect.arrayContaining(charactersDictionaryFixture));
    });

    // los valores de todos los conjuntos de valores originales no deben repetirse
    expect(hasRepeatedItemDictionaryHelper({ ...dictionary })).toBeFalsy();
  });
});

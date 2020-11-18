const { charactersDictionaryFixture } = require('../fixtures');

const generateIntegerRandom = (min, max) => {
  // no incluye max
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = () => {
  let characters = [...charactersDictionaryFixture]; // copia del fixture
  let dictionaryKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // el valor es el mismo indice
  let dictionary = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  while (characters.length > 0) {
    const dictionaryKeysIndex = generateIntegerRandom(0, dictionaryKeys.length);
    const dictionaryKey = dictionaryKeys[dictionaryKeysIndex];

    if (dictionary[dictionaryKey].length < 4) {
      dictionary[dictionaryKey].push(characters.pop());

      if (dictionary[dictionaryKey].length === 4) {
        // procedemos a eliminar la key en dictionaryKeys que llegó al tope en dictionary
        dictionaryKeys.filter((value, index) => index !== dictionaryKeysIndex);
        //el valor deja de ser el mismo indice en dictionaryKeys
      }
    }
  }

  return dictionary;
};

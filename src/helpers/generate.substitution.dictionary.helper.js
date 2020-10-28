const generateIntegerRandom = (min, max) => {
  // no incluye max
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = () => {
  let characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let payloadKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // el valor es el mismo indice
  let payload = {
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
    const payloadKeysIndex = generateIntegerRandom(0, payloadKeys.length);
    const payloadKey = payloadKeys[payloadKeysIndex];

    if (payload[payloadKey].length < 4) {
      payload[payloadKey].push(characters.pop());

      if (payload[payloadKey].length === 4) {
        // procedemos a eliminar la key en payloadKeys que llegó al tope en payload
        payloadKeys.filter((value, index) => index !== payloadKeysIndex);
        //el valor deja de ser el mismo indice en payloadKeys
      }
    }
  }

  return payload;
};

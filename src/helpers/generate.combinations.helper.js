module.exports = (password, dictionary) => {
  let r = [],
    c = 0,
    n = 0,
    valuesOfN = 0,
    combination = '',
    combinations = [],
    disccountColumn = 0,
    lastColumn,
    canContinue = true;

  while (c < password.length) {
    n = password[c];
    valuesOfN = dictionary[n];
    r.push([valuesOfN.length - 1, valuesOfN.length - 1]);
    c++;
  }

  c = 0;
  lastColumn = password.length - 1;
  while (canContinue) {
    n = password[c];
    valuesOfN = dictionary[n];
    indexRowValuesOfN = r[c][0];
    combination += valuesOfN[indexRowValuesOfN];

    if (c > 0 && isEnded(r, c - 1)) {
      disccountColumn = c;
    }

    if (c === lastColumn) {
      if (isEnded(r, lastColumn)) canContinue = false;
      if (disccountColumn !== 0 && isEnded(r, disccountColumn - 1)) {
        resetIndexesRows(r, disccountColumn - 1);
        r[disccountColumn][0]--;
      }
      if (r[0][0] === 0) r[0][0] = r[0][1];
      else r[0][0]--;
      c = 0;
      combinations.push(combination);
      combination = '';
    } else c++;
  }
  return combinations;
};

const resetIndexesRows = (array, from) => {
  for (let i = from; i > 0; i--) {
    array[i][0] = array[i][1];
  }
};

const isEnded = (array, from) => {
  let end = true;
  for (let i = from; i >= 0; i--) {
    if (array[i][0] !== 0) {
      end = false;
      break;
    }
  }
  return end;
};

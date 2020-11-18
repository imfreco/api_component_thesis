module.exports = (dictionary) => {
  hasRepeated = false;
  let individualItems = [];

  Object.keys(dictionary).map((substitute) => {
    return dictionary[substitute].map((original) => {
      if (individualItems.includes(original)) {
        hasRepeated = true;
      }
      return individualItems.push(original);
    });
  });

  return hasRepeated;
};

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createRandomInteger = function(min, max) {
  const previousValue = [];
  return function () {

    if (previousValue.length === max - min + 1) {
      return 'error';
    }
    let currentValue = getRandomInt(min, max);
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValue.push(currentValue);
    return currentValue;
  };
};

export {createRandomInteger};
export {getRandomInt};

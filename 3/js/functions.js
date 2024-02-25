const checkoutLengthStr = function(str, strLength) {
  if (typeof str === 'string') {
    return (str.length <= strLength);
  }
  return 'not a string';
};

checkoutLengthStr('проверяемая строка',20);
checkoutLengthStr('проверяемая строка',18);
checkoutLengthStr('проверяемая строка',10);
checkoutLengthStr(126,20);

const checkoutPalindtom = function(str) {
  if (typeof str === 'string') {
    const strNormalize = str.toUpperCase().replaceAll(' ', '');
    let strNormalizePalindrom = '';
    for (let i = strNormalize.length - 1; i >= 0; i--) {
      strNormalizePalindrom += strNormalize[i];
    }
    return (strNormalizePalindrom === strNormalize);
  }
  return 'not a string';
};


checkoutPalindtom('топот');
checkoutPalindtom('ДовОд');
checkoutPalindtom('Кекс');
checkoutPalindtom('Лёша на полке клопа нашёл ');

const extractNamber = function(str) {
  if (typeof str === 'string') {
    let extractStr = '';
    for (let i = 0; i < str.length; i++) {
      if (Number(str[i]) || str[i] === '0') {
        extractStr += str[i];
      }
    }
    return parseInt(extractStr, 10);
  }
  return 'not a string';
};

extractNamber('2023 год ');
extractNamber('ECMAScript 2022');
extractNamber('1 кефир, 0.5 батона');
extractNamber('агент 007');
extractNamber('а я томат');


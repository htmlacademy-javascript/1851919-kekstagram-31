const checkoutLengthStr = function(str, strLength) {
  if (typeof str === 'string') {
    return (str.length <= strLength);
  }
  return 'not a string';
};

console.log(checkoutLengthStr('проверяемая строка',20));
console.log(checkoutLengthStr('проверяемая строка',18));
console.log(checkoutLengthStr('проверяемая строка',10));
console.log(checkoutLengthStr(126,20));

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


console.log(checkoutPalindtom('топот'));
console.log(checkoutPalindtom('ДовОд'));
console.log(checkoutPalindtom('Кекс'));
console.log(checkoutPalindtom('Лёша на полке клопа нашёл '));

const extractNamber = function(str) {
  if (typeof str === 'string') {
    let extractStr = '';
    for (let i = 0; i < str.length; i++) {
      if (Number(str[i]) || str[i] === '0') {
        extractStr += str[i];
      }
    }
    return parseInt(extractStr);
  }
  return 'not a string';
}

console.log(extractNamber('2023 год '));
console.log(extractNamber('ECMAScript 2022'));
console.log(extractNamber('1 кефир, 0.5 батона'));
console.log(extractNamber('агент 007'));
console.log(extractNamber('а я томат'));


const MINUTES_PER_HOUR = 60;

const checkWorkDay = function(startWorkDay, endWorkDay, startMeeting, lengthMeeting) {
  const startMeetingMinutes = Number(startMeeting.split(':')[0]) * MINUTES_PER_HOUR + Number(startMeeting.split(':')[1]);
  const endMeetingMinutes = startMeetingMinutes + lengthMeeting;
  const startWorDayMinutes = Number(startWorkDay.split(':')[0]) * MINUTES_PER_HOUR + Number(startWorkDay.split(':')[1]);
  const endWorkDayMinutes = Number(endWorkDay.split(':')[0]) * MINUTES_PER_HOUR + Number(endWorkDay.split(':')[1]);
  if (endMeetingMinutes > endWorkDayMinutes || startMeetingMinutes < startWorDayMinutes) {
    return false;
  }
  return true;
};

checkWorkDay('08:00', '17:30', '14:00', 90);
checkWorkDay('8:0', '10:0', '8:0', 120);
checkWorkDay('08:00', '14:30', '14:00', 90);
checkWorkDay('14:00', '17:30', '08:0', 90);
checkWorkDay('8:00', '17:30', '08:00', 900);


/*const checkoutLengthStr = function(str, strLength) {
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

*/

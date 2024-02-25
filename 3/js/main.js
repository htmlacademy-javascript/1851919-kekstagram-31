const amountObject = 25;
const objectsMock = [];
const names = ['Петя', 'Вася', 'Катя', 'Маша', 'Юля'];
const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const descriptions = ['Сириус', 'Регул', 'Арктур', 'Астеропа', 'Капелла', 'Меропа', 'Бетельгейзе'];

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

const createObject = function() {

  const idCreated = createRandomInteger(1,amountObject);
  const urlCreated = createRandomInteger(1,amountObject);
  const idComment = createRandomInteger(1,1000);

  for (let i = 1; i <= amountObject; i++) {
    //создаем объект
    const objectCreated = {};
    objectCreated.id = idCreated();
    objectCreated.url = `photos/${urlCreated()}.jpg`;
    objectCreated.likes = getRandomInt(15,200);
    objectCreated.description = descriptions[getRandomInt(0,6)];
    //создаем массив комментариев
    const amountComment = getRandomInt(0,30);
    const massiveComment = [];
    if (amountComment) {
      for (let j = 1; j <= amountComment; j++) {
        const commentCreated = {};
        commentCreated.name = names[getRandomInt(0,4)];
        commentCreated.avatar = `img/avatar-${getRandomInt(1,6)}.svg`;
        commentCreated.id = idComment();
        commentCreated.message = messages[getRandomInt(0,6)];
        massiveComment.push(commentCreated);

      }
    }
    objectCreated.comments = massiveComment;
    objectsMock.push(objectCreated);
  }

};

createObject();
//console.log(objectsMock);

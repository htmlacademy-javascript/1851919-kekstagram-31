import {createRandomInteger} from './util.js';
import {getRandomInt} from './util.js';
import {AMOUNT_OBJECT, NAMES, MESSAGES, DESCRIPTIONS} from './data.js';

const createObject = function() {
  const objectsMock = [];
  const idCreated = createRandomInteger(1,AMOUNT_OBJECT);
  const urlCreated = createRandomInteger(1,AMOUNT_OBJECT);
  const idComment = createRandomInteger(1,1000);

  for (let i = 1; i <= AMOUNT_OBJECT; i++) {
    //создаем объект
    const objectCreated = {};
    objectCreated.id = idCreated();
    objectCreated.url = `photos/${urlCreated()}.jpg`;
    objectCreated.likes = getRandomInt(15,200);
    objectCreated.description = DESCRIPTIONS[getRandomInt(0,DESCRIPTIONS.length - 1)];
    //создаем массив комментариев
    const amountComment = getRandomInt(0,30);
    const massiveComment = [];
    if (amountComment) {
      for (let j = 1; j <= amountComment; j++) {
        const commentCreated = {};
        commentCreated.name = NAMES[getRandomInt(0,NAMES.length - 1)];
        commentCreated.avatar = `img/avatar-${getRandomInt(1,6)}.svg`;
        commentCreated.id = idComment();
        commentCreated.message = MESSAGES[getRandomInt(0,MESSAGES.length - 1)];
        massiveComment.push(commentCreated);

      }
    }
    objectCreated.comments = massiveComment;
    objectsMock.push(objectCreated);
  }
  return(objectsMock);
};

export {createObject};


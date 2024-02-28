import {createRandomInteger} from './util.js';
import {getRandomInt} from './util.js';
import {amountObject, names, messages, descriptions} from './data.js';

const createObject = function() {
  const objectsMock = [];
  const idCreated = createRandomInteger(1,amountObject);
  const urlCreated = createRandomInteger(1,amountObject);
  const idComment = createRandomInteger(1,1000);

  for (let i = 1; i <= amountObject; i++) {
    //создаем объект
    const objectCreated = {};
    objectCreated.id = idCreated();
    objectCreated.url = `photos/${urlCreated()}.jpg`;
    objectCreated.likes = getRandomInt(15,200);
    objectCreated.description = descriptions[getRandomInt(0,descriptions.length)];
    //создаем массив комментариев
    const amountComment = getRandomInt(0,30);
    const massiveComment = [];
    if (amountComment) {
      for (let j = 1; j <= amountComment; j++) {
        const commentCreated = {};
        commentCreated.name = names[getRandomInt(0,names.length)];
        commentCreated.avatar = `img/avatar-${getRandomInt(1,6)}.svg`;
        commentCreated.id = idComment();
        commentCreated.message = messages[getRandomInt(0,messages.length)];
        massiveComment.push(commentCreated);

      }
    }
    objectCreated.comments = massiveComment;
    objectsMock.push(objectCreated);
  }
  return(objectsMock);
};

export {createObject};


import {createObject} from './setup.js';

const drawingThumbnails = () => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureArray = createObject();
  const pictureArea = document.querySelector('.pictures');
  const pictureFragment = document.createDocumentFragment();

  pictureArray.forEach((element) => {
    const picture = pictureTemplate.cloneNode(true);
    const pictureImg = picture.querySelector('img');
    pictureImg.src = element.url;
    pictureImg.alt = element.description;
    const pictureLike = picture.querySelector('.picture__likes');
    pictureLike.textContent = element.likes;
    const pictureComment = picture.querySelector('.picture__comments');
    pictureComment.textContent = element.comments.length;
    pictureFragment.append(picture);

  });
  pictureArea.append(pictureFragment);
};


export {drawingThumbnails};



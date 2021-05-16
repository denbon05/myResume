import myPhotoJPG from './img/I.jpg';
import addInfo from './helpers';

const addPhoto = () => {
  const myPhotoEl = document.getElementById('myPhoto');
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', myPhotoJPG);
  imgEl.setAttribute('alt', 'My photo');
  imgEl.setAttribute('width', '300px');
  imgEl.setAttribute('height', '230px');
  imgEl.classList = 'rounded-circle photo';
  myPhotoEl.appendChild(imgEl);
};

export default (elements, t) => {
  addPhoto();
  addInfo(elements, t);
};

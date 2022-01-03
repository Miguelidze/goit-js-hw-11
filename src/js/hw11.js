import Notiflix from 'notiflix';
import {
  Api,
  fixedHeader,
  pagePreparation,
  tryHandler,
  scrolling
} from './service.js'
export const refs = {
  gallery: document.querySelector('.gallery'),
  form: document.getElementById('search-form'),
  header: document.querySelector('.header'),
  scrollTarget: document.querySelector('.scrollTarget'),
}

export const service = new Api();

export const notiflixFailure = () => {
  Notiflix.Notify.failure('No value entered !!!')
};
export const notiflixWarning = () => {
  Notiflix.Notify.warning(`Sorry, there are no images matching your search query. Please try again.`);
};
export const notiflixInfo = (total) => {
  Notiflix.Notify.info(`Hooray! We found ${total} images !!!`);
};

fixedHeader();

const onSubmit = (e) => {
  pagePreparation(e);

  try {
    tryHandler(e);
  } catch (error) {
    console.error(error);
  }
}

scrolling();

refs.form.addEventListener('submit', onSubmit);
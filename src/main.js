import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGalleryTemplate,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`form`);

const onSearchFormSubmit = event => {
  event.preventDefault(); 
  
  const query = form.elements.search_text.value.trim()
  if (!query) {
      iziToast.error({
        message: 'Input cant be empty!',
        position: 'topCenter',
      });
      return 
  }

  clearGallery();
  showLoader();
  
  
  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          position: 'topCenter',
          message: `Sorry, there are no images matching your search query. Please, try again!`,
        });
        form.elements.search_text.placeholder = `${query}`;
        form.reset();
        return;
      }

      createGalleryTemplate(data.hits);
      
      form.elements.search_text.placeholder = `${query}`;
      form.reset();
    })
    .catch(err => {
      iziToast.error({
        message: 'Something went wrong!',
        position: 'topCenter',
      });
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
};


form.addEventListener(`submit`, onSearchFormSubmit);


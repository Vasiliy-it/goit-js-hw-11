import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import { searchImages } from "./js/pixabay-api";
import { generateGalleryMarkup } from "./js/render-functions";

const form = document.querySelector('.search-form'); // Отримуємо форму
const searchInput = document.querySelector('input[type=search]');
const galleryList = document.querySelector('.gallery__list');
let lightbox;

form.addEventListener("submit", event => {
  event.preventDefault();
  
  
  
  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Fill search input!',
      position: 'topRight'
    });
    return;
  }

  
  galleryList.innerHTML = '';
  
  searchImages(query, images => {
    const markup = generateGalleryMarkup(images);
    galleryList.innerHTML = markup;

    
    if (lightbox) {
      lightbox.refresh();
    } else {
      lightbox = new SimpleLightbox('.gallery__list a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    }

    searchInput.value = '';
  });
});

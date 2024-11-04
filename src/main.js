import { fetchImages } from './pixabay-api.js';
import { renderGallery, showNotification, clearGallery } from './render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
let lightbox;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value.trim();
    
    if (!query) {
        showNotification("Please enter a search query.");
        return;
    }

    clearGallery();
    
    const images = await fetchImages(query);
    
    if (images.length === 0) {
        showNotification("Sorry, there are no images matching your search query. Please try again!");
        return;
    }

    renderGallery(images);
    
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
});

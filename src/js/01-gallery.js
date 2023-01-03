import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const imageGallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const modalLink = document.createElement('a');
  modalLink.classList.add('gallery__item');
  modalLink.setAttribute('href', item.original);

  const galleryItem = document.createElement('img');
  galleryItem.src = item.preview;
  galleryItem.classList.add('gallery__image');
  galleryItem.setAttribute('alt', item.description);

  imageGallery.appendChild(modalLink);
  modalLink.appendChild(galleryItem);
});

let lightbox = new SimpleLightbox(`.gallery a`, {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
  animationSpeed: 350,
});

const modal = e => {
  e.preventDefault();
  e.lightbox.open();
};

imageGallery.addEventListener('click', modal);

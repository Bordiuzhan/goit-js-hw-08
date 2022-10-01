import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEL = document.querySelector('.gallery');

const elementsOfGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join(' ');

galleryContainerEL.insertAdjacentHTML('beforeend', elementsOfGallery);
galleryContainerEL.addEventListener('click', onOpenModal);

const instance = new SimpleLightbox(`.gallery .gallery__item`, {
  overlayOpacity: 1,
  captionsData: 'alt',
  captionDelay: 250,
});
function onOpenModal(e) {
  e.preventDefault();
  instance.on('show.simplelightbox');
}

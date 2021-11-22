// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const galleryContainar = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainar.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li>
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join('');
}

galleryContainar.addEventListener('click', onGalleryLinkClick);

function onGalleryLinkClick(evt) {
  evt.preventDefault();
  const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryLinkEl) {
    return;
  }
  return;
}

const lightbox = new SimpleLightbox('.gallery__item', {
  nav: true,
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  infinite: false,
});

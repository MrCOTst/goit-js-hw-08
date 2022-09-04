// Add imports above this line

// import galleryCardsTpl from '../templates/gallery-cards';
// import galleryItems from '../js/gallery-items.json';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const cardSet = document.querySelector(".gallery");
const cardsMarkup = createImageCards(galleryItems);

cardSet.insertAdjacentHTML("beforeend", cardsMarkup);

function createImageCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
};

// function createImageCards(items) {
// //   return galleryItems.map(galleryCardTpl).join("");
// return galleryCardsTpl(items);
// }

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
} );





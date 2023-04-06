import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації


console.log(galleryItems);

const galleryBoxList = document.querySelector('.gallery');
const imageMarkup = createBoxImageMarkup(galleryItems);
// const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
// });
galleryBoxList.insertAdjacentHTML('beforeend', imageMarkup);
galleryBoxList.addEventListener('click', onImgClick);

function createBoxImageMarkup(galleryItems) {
return galleryItems
    .map((image) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" 
      src="${image.preview}"
      alt="${image.description}" />
   </a>
</li>`)
    .join("");
};

function onImgClick(evt) {
    evt.preventDefault();
    const currentItem = evt.target;
    if (currentItem.nodeName !== 'IMG') {
        return;
    }
    let lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
    modal.open();
    console.log(modal);
}
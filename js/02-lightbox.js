import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImage);

function createGalleryImage(gallery) {
    return gallery.map(({ preview, original, description}) => {
        createImage(block);
    });
    .join('');
    };

    function createImage(block) {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}"
        alt="${description}" width="340">
        </a>
        </div>
        `;
    }

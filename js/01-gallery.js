import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImage);
galleryContainer.addEventListener('click', onGalleryModalClick);

function createGalleryImage(gallery) {
    return gallery.map(({preview, original, description}) => {
        return `<div class="gallery__item"> 
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width="340">
        </a>
        </div>`;
    })
    .join('');
}

function onGalleryModalClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    onLightBoxModal(e) {
        const instance = basicLightBox.create('<img src="${e.target.dataset.source}" width="1280" height="auto"/>')
    }
}
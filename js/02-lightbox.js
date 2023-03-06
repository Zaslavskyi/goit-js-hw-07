import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.setAttribute('uk-lightbox', 'caption-position: bottom');
galleryContainer.addEventListener('click', onGalleryListClick);

function createGalleryImage(gallery) {
    return gallery.map(({preview, original, description}) => {
        const element = document.createElement('a');
        element.href = original;
        element.classList.add('gallery__item');
        element.dataset.caption = description;

        const image = 
    })
}
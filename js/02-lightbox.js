import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImage);

function createGalleryImage(gallery) {
    return gallery.map(({ preview, original, description}) => {
        
    })
    }

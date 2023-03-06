import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.setAttribute('uk-lightbox', 'caption-position: bottom');
galleryContainer.addEventListener('click', onGalleryListClick);

function createGalleryImage(gallery) {
    return gallery.map(({ preview, original, description}) => {
        const item = document.createElement('a');
        item.href = original;
        item.classList.add('gallery__item');
        item.dataset.caption = description;

        const image = document.createElement('img');
        image.src = preview;
        image.classList.add('gallary__image');
        image.alt = description;
        image.title = description;
        image.delay = 250;
        imagetitlePosition = 'top';
        image.append(image);
        return image;
    })
}
import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.setAttribute('uk-lightbox', 'caption-position: bottom');

galleryContainer.append(...galleryImage);

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
        image.titlePosition = 'top';
        item.append(image);
        return item;
    });
};


const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionDelay: 250
});

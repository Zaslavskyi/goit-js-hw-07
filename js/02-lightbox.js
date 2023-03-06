import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);

galleryContainer.setAttribute('uk-lightbox', 'caption-position: bottom');
galleryContainer.addEventListener('click', onGalleryListClick);
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

function onGalleryClick(e) {
    e.preventDefault();
        
        if (e.target.nodeName !== 'IMG') {
            return;
        };

        let href = (e.target.closest('a').getAttribute('href'));
        return href;

};

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function() {

});

gallery.on('error.simplelightbox', function(e) {
    console.log(e);
})
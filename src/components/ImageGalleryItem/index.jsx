import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, openModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={images.webformatURL}
        alt={images.tags}
        onClick={() => openModal(images.largeImageURL, images.tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;

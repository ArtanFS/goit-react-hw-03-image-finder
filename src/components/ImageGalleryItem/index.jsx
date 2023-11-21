import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, openModal }) => {
  const imageData = { url: images.largeImageURL, alt: images.tags };
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={images.webformatURL}
        alt={images.tags}
        onClick={() => openModal(imageData)}
      />
    </li>
  );
};

export default ImageGalleryItem;

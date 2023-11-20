import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={images.webformatURL}
        alt={images.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;

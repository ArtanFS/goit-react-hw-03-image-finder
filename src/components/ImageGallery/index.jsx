import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images &&
        images.map(el => (
          <ImageGalleryItem key={el.id} images={el} openModal={openModal} />
        ))}
    </ul>
  );
};

export default ImageGallery;

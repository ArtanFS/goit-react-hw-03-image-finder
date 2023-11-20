import ImageGalleryItem from '../ImageGalleryItem';
import { Images } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <Images>
      {images && images.map(el => <ImageGalleryItem key={el.id} images={el} />)}
    </Images>
  );
};

export default ImageGallery;

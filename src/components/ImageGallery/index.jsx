import ImageGalleryItem from '../ImageGalleryItem';
import { Images } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  console.log({ images });

  return (
    <Images>
      {images && images.map(el => <ImageGalleryItem key={el.id} images={el} />)}
    </Images>
  );
};

export default ImageGallery;

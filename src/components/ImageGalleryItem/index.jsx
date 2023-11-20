import { ImageItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images }) => {
  return (
    <ImageItem>
      <img src={images.webformatURL} alt={images.tags} />
    </ImageItem>
  );
};

export default ImageGalleryItem;

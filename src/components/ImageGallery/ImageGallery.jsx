import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

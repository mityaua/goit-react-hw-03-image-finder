import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles['ImageGalleryItem-image']}
      />
    </li>
  );
};

export default ImageGalleryItem;

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ image, onClick }) => {
  const fullImage = () => onClick(image.largeImageURL);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles['ImageGalleryItem-image']}
        onClick={fullImage}
      />
    </li>
  );
};

export default ImageGalleryItem;

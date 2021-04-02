import styles from './Button.module.scss';

const Button = ({ onClick }) => {
  return (
    <div className={styles['Button-wrapper']}>
      <button type="button" className={styles.Button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

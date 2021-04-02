import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={styles['Error-wrapper']}>
      <h2>Oops!</h2>
      <p>Sorry, something went wrong. Please try again, or refresh the page</p>
    </div>
  );
};

export default ErrorMessage;

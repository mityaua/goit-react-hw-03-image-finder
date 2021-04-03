import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = ({ children }) => {
  return <div className={styles.Message}>{children}</div>;
};

Message.defaultProps = {
  children: [],
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;

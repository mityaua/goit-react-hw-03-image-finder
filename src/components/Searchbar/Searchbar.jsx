import SearchFrom from '../SearchForm';

import styles from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <SearchFrom onSubmit={onSubmit} />
    </header>
  );
};

export default Searchbar;

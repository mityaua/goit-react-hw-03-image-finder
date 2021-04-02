import SearchFrom from '../SearchForm';

import styles from './Searchbar.module.scss';

const Searchbar = () => {
  return (
    <header className={styles.Searchbar}>
      <SearchFrom />
    </header>
  );
};

export default Searchbar;

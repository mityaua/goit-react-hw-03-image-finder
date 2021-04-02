import React, { Component } from 'react';
import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

class Loader extends Component {
  render() {
    return (
      <div className={styles.Loader}>
        <Template type="TailSpin" color="#02be6e" height={100} width={100} />
      </div>
    );
  }
}

export default Loader;

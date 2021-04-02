import React, { Component } from 'react';

import styles from './SearchForm.module.scss';

class SearchFrom extends Component {
  state = {
    search: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.search) return;

    console.log(this.state.search);
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={styles['SearchForm-input']}
          type="text"
          name="search"
          value={this.search}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

export default SearchFrom;

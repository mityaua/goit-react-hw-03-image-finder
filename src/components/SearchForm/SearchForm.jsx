import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.scss';

class SearchFrom extends Component {
  state = {
    query: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Запрещает отправку пустого инпута
    if (!this.state.query) return;

    // Отдать данные внешнему компоненту
    this.props.onSearch(this.state.query);

    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      query: '',
    });

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={styles['SearchForm-input']}
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;

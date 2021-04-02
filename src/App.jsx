import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';

import api from './api/api-services';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  // Если при обновлении запрос не равен между стейтами, тогда делаем фетч
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchAllImages();
    }
  }

  // Принимаем с формы запрос и пишем в стейт
  onChangeQuery = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      error: null,
    });
  };

  // Получаем дату из фетча
  fetchAllImages = async () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const { hits } = await api.fetchImages(searchQuery, currentPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { images, isLoading, error } = this.state;

    // Заменить ошибку на компонент
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <Loader />}

        {error && <h1>Error!</h1>}

        <ImageGallery images={images} />

        {images.length > 0 && <Button onClick={this.fetchAllImages} />}
      </>
    );
  }
}

export default App;

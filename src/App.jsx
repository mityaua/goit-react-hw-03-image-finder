import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

import api from './api/api-services';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
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
    });
  };

  // Получаем дату из фетча
  fetchAllImages = async () => {
    const { currentPage, searchQuery } = this.state;

    try {
      const { hits } = await api.fetchImages(searchQuery, currentPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      return console.log(error);
    }
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />
        <Button onClick={this.fetchAllImages} />
      </>
    );
  }
}

export default App;

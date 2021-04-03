import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Modal from './components/Modal';

import api from './api/api-services';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
  };

  // Если при обновлении запрос не равен между стейтами, тогда делаем фетч
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchAllImages();
    }
  }

  // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки стейт
  onChangeQuery = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      isLoading: false,
      showModal: false,
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
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  // Доработать открытие модалки
  handleImageItem = fullImageUrl => {
    console.log(fullImageUrl);

    this.setState({
      largeImage: fullImageUrl,
    });

    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, fullImageUrl, error } = this.state;
    const needToShowLoadMore = images.length > 0 && images.length >= 12; // Нужны доп проверки

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <Loader />}

        {error && <ErrorMessage />}

        <ImageGallery images={images} onImageClick={this.handleImageItem} />

        {needToShowLoadMore && <Button onClick={this.fetchAllImages} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={fullImageUrl} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;

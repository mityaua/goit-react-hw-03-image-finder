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
      currentPage: 1,
      searchQuery: query,
      isLoading: false,
      showModal: false,
      largeImage: '',
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

      if (currentPage !== 1) {
        this.scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  // Получает полное изображение и открывает модалку
  handleGalleryItem = fullImageUrl => {
    this.setState({
      showModal: true,
      largeImage: fullImageUrl,
    });
  };

  // Переключение модалки
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  // Скролл при клике на кнопку
  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, showModal, largeImage, error } = this.state;
    const needToShowLoadMore = images.length > 0 && images.length >= 12; // Нужны доп проверки;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <Loader />}

        {error && <ErrorMessage />}

        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />

        {needToShowLoadMore && <Button onClick={this.fetchAllImages} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;

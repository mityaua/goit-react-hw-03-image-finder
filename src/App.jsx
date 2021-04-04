import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Message from './components/Message';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './assets/images/icons/close.svg';

import fetchImages from './api/api-services';

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
      this.getImages();
    }
  }

  // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки ключи из стейта
  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  // Получаем дату из фетча
  getImages = async () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

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

  // Получает полное изображение, пишет его в стейт и открывает модалку
  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  // Переключение модалки
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
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
        <Searchbar onSearch={this.onChangeQuery} />

        {images.length < 1 && (
          <Message>
            <h2>The gallery is empty 🙁</h2>
            <p>Use search field!</p>
          </Message>
        )}

        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />

        {needToShowLoadMore && <Button onClick={this.getImages} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className="Close-box">
              <IconButton onClick={this.toggleModal} aria-label="Close modal">
                <CloseIcon width="20px" height="20px" fill="#7e7b7b" />
              </IconButton>
            </div>

            <img src={largeImage} alt="" className="Modal-image" />
          </Modal>
        )}

        {isLoading && <Loader />}

        {error && (
          <Message>
            <h2>Oops! 😫</h2>
            <p>
              Sorry, something went wrong. Please try again, or{' '}
              <a href="/">refresh the page</a>.
            </p>
          </Message>
        )}
      </>
    );
  }
}

export default App;

// Попытка переделать на хуки

// import { useState, useEffect, useRef } from 'react';

// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';
// import Loader from './components/Loader';
// import Message from './components/Message';
// import Modal from './components/Modal';
// import IconButton from './components/IconButton';
// import { ReactComponent as CloseIcon } from './assets/images/icons/close.svg';

// import fetchImages from './api/api-services';

// const App = () => {
//   const [state, setState] = useState({
//     images: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     showModal: false,
//     largeImage: '',
//     error: null,
//   });

//   const mounted = useRef();
//   useEffect(() => {
//     if (!mounted.current) {
//       // Делать что-то при монтировании
//       mounted.current = true;
//     } else {
//       getImages();
//     }
//   }, [state.searchQuery]);

//   // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки стейт
//   const onChangeQuery = query => {
//     setState({
//       images: [],
//       currentPage: 1,
//       searchQuery: query,
//       isLoading: false,
//       showModal: false,
//       largeImage: '',
//       error: null,
//     });
//   };

//   // Получаем дату из фетча
//   const getImages = async () => {
//     const { currentPage, searchQuery } = state;

//     setState({
//       isLoading: true,
//     });

//     try {
//       const { hits } = await fetchImages(searchQuery, currentPage);

//       setState(prevState => ({
//         images: [...prevState.images, ...hits],
//         currentPage: prevState.currentPage + 1,
//       }));

//       if (currentPage !== 1) {
//         scrollOnLoadButton();
//       }
//     } catch (error) {
//       console.log('Smth wrong with App fetch', error);
//       setState({ error });
//     } finally {
//       setState({
//         isLoading: false,
//       });
//     }
//   };

//   // Получает полное изображение, пишет его в стейт и открывает модалку
//   const handleGalleryItem = fullImageUrl => {
//     setState({
//       largeImage: fullImageUrl,
//       showModal: true,
//     });
//   };

//   // Переключение модалки
//   const toggleModal = () => {
//     setState(prevState => ({
//       showModal: !prevState.showModal,
//     }));
//   };

//   // Скролл при клике на кнопку
//   const scrollOnLoadButton = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   const { images, isLoading, showModal, largeImage, error } = state;
//   const needToShowLoadMore = images.length > 0 && images.length >= 12; // Нужны доп проверки;

//   return (
//     <>
//       <Searchbar onSearch={onChangeQuery} />

//       {images.length < 1 && (
//         <Message>
//           <h2>The gallery is empty 🙁</h2>
//           <p>Use search field!</p>
//         </Message>
//       )}

//       <ImageGallery images={images} onImageClick={handleGalleryItem} />

//       {needToShowLoadMore && <Button onClick={getImages} />}

//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <div className="Close-box">
//             <IconButton onClick={toggleModal} aria-label="Close modal">
//               <CloseIcon width="20px" height="20px" fill="#7e7b7b" />
//             </IconButton>
//           </div>

//           <img src={largeImage} alt="" className="Modal-image" />
//         </Modal>
//       )}

//       {isLoading && <Loader />}

//       {error && (
//         <Message>
//           <h2>Oops! 😫</h2>
//           <p>
//             Sorry, something went wrong. Please try again, or{' '}
//             <a href="/">refresh the page</a>.
//           </p>
//         </Message>
//       )}
//     </>
//   );
// };

// export default App;

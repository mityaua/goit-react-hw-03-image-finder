import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '20008538-9b5c20cc133cf43381bf6ef09';
import api from './api/api-services';
// axios.defaults.headers.common['Authorization'] = 'Bearer 20008538-9b5c20cc133cf43381bf6ef09';

class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    api
      .fetchImages()
      .then(({ hits }) => this.setState({ images: hits }))
      .catch(error => console.log(error));
  }

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar />
        <ImageGallery images={images} />
      </>
    );
  }
}

export default App;

import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '20008538-9b5c20cc133cf43381bf6ef09';
const PER_PAGE = 12;

const fetchImages = async () => {
  const { data } = await axios.get(
    `/?q=mango&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`,
  );

  return data;
};

export default { fetchImages };

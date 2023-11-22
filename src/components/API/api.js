import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImages(query, page) {
  let params = {
    key: '39799533-be43f3098008d0f2e0b6204fa',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: `${page}`,
    q: `${query}`,
  };

  const { data } = await axios('', { params });
  return data;
}

export default getImages;

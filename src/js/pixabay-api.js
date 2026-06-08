import axios from 'axios';
export const getImagesByQuery = query => {
  const requestParams = new URLSearchParams({
    key: '56220585-56a0c3bb81d566663f8c5eae4',
    q: query,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
  });
  return axios
    .get(`https://pixabay.com/api/?${requestParams}`)
    .then(res => res.data);
};

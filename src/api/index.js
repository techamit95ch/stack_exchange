import axios from 'axios';

const similarUrl = 'https://api.stackexchange.com/2.3/similar';
const searchUrl = 'https://api.stackexchange.com/2.3/search/excerpts';
// `?order=desc&sort=activity&title=npm%20start%20error%20with%20create-react-app&site=stackoverflow`;
export const getSimilarQuestion = (query) =>
  axios.get(
    `${similarUrl}?order=desc&sort=activity&title=${query}&site=stackoverflow`
  );
export const getSearchQuestion = (query, page) =>
  axios.get(
    `${searchUrl}?page=${page}&pagesize=10&order=desc&sort=activity&title=${query}&site=stackoverflow`
  );

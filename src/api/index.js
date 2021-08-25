import axios from 'axios';

const similarUrl = 'https://api.stackexchange.com/2.3/similar';
const searchUrl = 'https://api.stackexchange.com/2.3/search/advanced';
const searchUrl1 = 'https://api.stackexchange.com/2.3/search/excerpts';

const questionUrl = 'https://api.stackexchange.com/docs/questions-by-ids';
const answersURL = 'https://api.stackexchange.com/docs/questions';

export const getSimilarQuestion = (query) =>
  axios.get(
    `${similarUrl}?order=asc&sort=activity&title=${query}&site=stackoverflow`
  );
export const getSearchQuestion = (query, page) =>
  axios.get(
    `${searchUrl}?page=${page}&pagesize=10&order=desc&sort=activity&q=${query}&site=stackoverflow`
  );

export const getQuestion = (id, page) =>
  axios.get(
    `${questionUrl}#page=${page}&pagesize=10&order=desc&sort=activity&ids=${id}&filter=default&site=stackoverflow`
  );
export const getAnswers = (id, page) =>
  axios.get(
    `${answersURL}/${id}/answers?page=${page}&pagesize=10&order=asc&sort=activity&site=stackoverflow`
  );

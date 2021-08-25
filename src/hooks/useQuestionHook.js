import { useEffect, useState } from 'react';
import * as api from '../api/index';

export default () => {
  const [questionResults, setQuestionResults] = useState([]);
  const [questionError, setQuestionError] = useState('');
  // const [questionPage, setQuestionPage] = useState(1);
  const searchApi = async (SearchTerm, Page) => {
    try {
      // console.log(data.items);

      if (Page === 1) {
        const { data } = await api.getSearchQuestion(SearchTerm, Page);

        setQuestionResults([]);
        setQuestionResults(data.items);
      } else {
        const { data } = await api.getSearchQuestion(SearchTerm, Page);

        const nestData = questionResults.concat(data.items);
        setQuestionResults(nestData);
      }
      //   console.log(data);
    } catch (err) {
      console.log(err);
      setQuestionError('Something went wrong');
    }
  };

  return [searchApi, questionResults, questionError];
};

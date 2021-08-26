import { useEffect, useState } from 'react';
import * as api from '../api/index';
import axios from 'axios';

export default () => {
  const [questionResults, setQuestionResults] = useState([]);
  const [questionError, setQuestionError] = useState('');
  // const [questionPage, setQuestionPage] = useState(1);
  const searchApi = async (SearchTerm, Page) => {
    try {
      // console.log(data.items);
      const searchUrl = 'https://api.stackexchange.com/2.3/search/advanced';

      let str = `${searchUrl}?page=${Page}&pagesize=10&order=desc&sort=activity&q=${SearchTerm}&site=stackoverflow&filter=!.KWpexRBiMPCYwmT5ys3(_t4DG)Rz`;
      // console.log(str);
      const response = await axios.get(str);
      if (Page === 1) {
        // const { data } = await api.getSearchQuestion(SearchTerm, Page);
        setQuestionResults([]);
        setQuestionResults(response.data.items);
      } else {
        // const { data } = await api.getSearchQuestion(SearchTerm, Page);
        const nestData = questionResults.concat(response.data.items);
        setQuestionResults(nestData);
      }
      //   console.log(data);
    } catch (err) {
      console.log(err.message);
      const searchUrl = 'https://api.stackexchange.com/2.3/search/advanced';

      let str = `${searchUrl}?page=${Page}&pagesize=10&order=desc&sort=activity&q=${SearchTerm}&site=stackoverflow&filter=!.KWpexRBiMPCYwmT5ys3(_t4DG)Rz`;
      console.log(str);

      setQuestionError(`Something went wrong, ${err.message}`);
    }
  };

  return [searchApi, questionResults, questionError];
};

import { useEffect, useState } from 'react';
// import * as api from '../api/index';
import axios from 'axios';
export default () => {
  const [results, setQuestionResults] = useState([]);
  const [error, setQuestionError] = useState('');
  // const [questionPage, setQuestionPage] = useState(1);
  const searchApi = async (id, Page) => {
    try {
      // console.log(data.items);
      const { data } = await axios.get(
        `https://api.stackexchange.com/2.3/questions/${id}/answers?page=${Page}&pagesize=10&order=desc&sort=activity&site=stackoverflow`
      );
      if (Page === 1) {
        setQuestionResults([]);
        setQuestionResults(data.items);
      } else {
        const nestData = results.concat(data.items);
        setQuestionResults(nestData);
      }
      //   console.log(data);
    } catch (err) {
      console.log(err);
      setQuestionError('Something went wrong');
    }
  };

  return [searchApi, results];
};

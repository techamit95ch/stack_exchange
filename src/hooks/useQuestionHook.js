import { useEffect, useState } from 'react';
import * as api from '../api/index';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createData } from '../actions/questions';
export default () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  const [questionResults, setQuestionResults] = useState([]);
  const [questionError, setQuestionError] = useState('');
  const [allTerms, setAllTerms] = useState(state.searchTerms);
  const [allResults, setAllResults] = useState(state.searchResults);
  const searchApi = async (SearchTerm, Page) => {
    try {
      if (!allTerms.includes(SearchTerm)) {
        const searchUrl = 'https://api.stackexchange.com/2.3/search/advanced';
        let str = `${searchUrl}?page=${Page}&pagesize=10&order=desc&sort=activity&q=${SearchTerm}&site=stackoverflow&filter=!.KWpexRBiMPCYwmT5ys3(_t4DG)Rz`;
        const response = await axios.get(str);
        setQuestionResults([]);
        setQuestionResults(response.data.items);
        setAllTerms([...allTerms, SearchTerm]);
        setAllResults([
          ...allResults,
          { term: SearchTerm, result: response.data.items },
        ]);
        dispatch(createData(SearchTerm, response.data.items));
      } else {
        let index = allResults.findIndex((item) => item.term === SearchTerm);
        let data = allResults[index];

        if (data.result.length >= Page * 10) {
          let qRes = data.result.slice(0, Page * 10);
          setQuestionResults(qRes);
        } else if (
          data.result.length < Page * 10 &&
          data.result.length > (Page - 1) * 10
        ) {
          let qRes = data.result.slice(0, Page * 10);
          setQuestionResults(data.result);
        } else {
          const searchUrl = 'https://api.stackexchange.com/2.3/search/advanced';
          let str = `${searchUrl}?page=${Page}&pagesize=10&order=desc&sort=activity&q=${SearchTerm}&site=stackoverflow&filter=!.KWpexRBiMPCYwmT5ys3(_t4DG)Rz`;
          const response = await axios.get(str);
          setQuestionResults([...questionResults, ...response.data.items]);
          const res = allResults.map((item) => {
            if (item.term === SearchTerm) {
              return { term: item.term, result: questionResults };
            }
            return item;
          });
          setAllResults(res);
          dispatch(createData(SearchTerm, response.data.items));
        }
      }

      // Later
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

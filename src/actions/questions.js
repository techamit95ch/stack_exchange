import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const fetchData = () => async (dispatch) => {
  try {
    // const searchTerms = await SecureStore.getItemAsync('searchTerms');
    // const searchResults = await SecureStore.getItemAsync('searchResults');
    // await AsyncStorage.removeItem('searchTerms');
    // await AsyncStorage.removeItem('searchResults');
    const searchTerms = await AsyncStorage.getItem('searchTerms');
    const searchResults = await AsyncStorage.getItem('searchResults');
    if (!searchResults || !searchResults) {
      dispatch({
        type: 'FETCH_ALL',
        payload: { searchTerms: [], searchResults: [] },
      });
    } else {
      let term = JSON.parse(searchTerms);
      let results = JSON.parse(searchResults);
      dispatch({
        type: 'FETCH_ALL',
        payload: { searchTerms: term, searchResults: results },
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};
export const createData = (term, result) => async (dispatch) => {
  //   console.log('form create data');

  try {
    const searchTerms = await AsyncStorage.getItem('searchTerms');
    const searchResults = await AsyncStorage.getItem('searchResults');
    //   const searchTerms = await SecureStore.getItemAsync('searchTerms');
    //   const searchResults = await SecureStore.getItemAsync('searchResults');
    let dTerm;

    let dResults;
    //   console.log(dResults);

    let sTerm;
    let sResult;
    if (!searchResults || !searchResults) {
      sTerm = JSON.stringify([term]);
      sResult = JSON.stringify([{ term: term, result: result }]);
      dTerm = [term];

      dResults = [{ term: term, result: result }];
    } else {
      //   if(term)
      dTerm = JSON.parse(searchTerms);

      dResults = JSON.parse(searchResults);
      if (dTerm.includes(term)) {
        dResults.forEach((item) => {
          if (item.term === term) {
            item.result = [...item.result, ...result];
          }
        });
        sTerm = JSON.stringify(dTerm);
        sResult = JSON.stringify(dResults);
      } else {
        dTerm = [...dTerm, term];
        dResults = [...dResults, { term: term, result: result }];
        sTerm = JSON.stringify(dTerm);
        sResult = JSON.stringify(dResults);
      }
    }
    await AsyncStorage.setItem('searchTerms', sTerm);
    await AsyncStorage.setItem('searchResults', sResult);
    dispatch({
      type: 'CREATE',
      payload: {
        searchTerms: dTerm,
        searchResults: dResults,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

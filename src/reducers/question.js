// import { REHYDRATE } from 'redux-persist/constants';

export default (
  state = {
    searchTerms: [],
    searchResults: [],
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return {
        ...state,
        searchTerms: action.payload.searchTerms,
        searchResults: action.payload.searchResults,
      };
    /*  case REHYDRATE:
      const incoming = action.payload;
      if(incoming) return { ...state, ...incoming }
      return state; */
    default:
      return state;
  }
};

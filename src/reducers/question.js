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
    default:
      return state;
  }
};

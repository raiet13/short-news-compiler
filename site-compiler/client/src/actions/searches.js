// Note : Actions for the Search Object

// Add search to database
export const addSearch = search => {
  return {
    type: 'ADD_SEARCH',
    search
  };
};

// Fetch existing searches from database
export function fetchSearches() {
  return(dispatch) => {
    dispatch({type: 'LOADING_SEARCHES'});
    return fetch('')
    .then(
      console.log('fetched search data')
      );
  };
}

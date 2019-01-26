// Note : Actions for the Search Object

// Add search to database
export const addSearch = search => {
  console.log(`Add search : ${search}`);
  return {
    type: 'ADD_SEARCH',
    payload: search
  };
};

// Fetch existing searches from database
export function fetchSearches() {
  return dispatch => {
    dispatch({type: 'LOADING_SEARCHES'});
    return fetch(`http://localhost:3001/api/searches`)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'FETCH_SEARCHES',
        payload: data
      }));
  };
};

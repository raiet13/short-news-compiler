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
  return dispatch => {
    console.log("loading searches");
    dispatch({type: 'LOADING_SEARCHES'});

    return fetch(`http://localhost:3001/api/searches`)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'FETCH_SEARCHES',
        payload: data
      }));
  };
};

// Note : Just a test function to ensure that it is working aside from the dispatch...
export function fetchSearchesNoDispatch() {
  console.log('fetching searches, no dispatch');
  fetch(`api/searches`, {
    accept: "application/json"
    }).then(response => response.json())
      .then(data => {
        console.log(data);
  });
};

// Note : Actions for the Search Object

// Add search to database
export function addSearch(search) {
  console.log(`Add search : ${search}`);
  return dispatch => {
    return fetch(`http://localhost:3001/api/searches`, {
      method: 'post',
      body: JSON.stringify({search_term: search}),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }})
    .then( response => {
      debugger;
      console.log('posted new search to database : ', response)
      dispatch({type: 'ADD_SEARCH', payload: search})
    });
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

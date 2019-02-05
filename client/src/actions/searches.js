// Note : Actions for the Search Object

// Add search to database -- Function Mohammed at Project Support is working on
// export function addSearch(search) {
//   console.log(`Add search : ${search}`);
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/searches`, {
//       method: 'POST',
//       body: JSON.stringify({search_term: search}),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then( response => {
//       debugger;
//       console.log('posted new search to database : ', response)
//       return response.json()
//     })
//     .then(data => dispatch({type: 'ADD_SEARCH', payload: search}));
//   };
// };


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

// Add search to database -- Note : Original not working add fetch -- check what is being pushed to the searches controller because it could have to do with the restrictions in the controller creation that are the problem
export function addSearch(search) {
  console.log(`Add search : ${search}`);
  let saveSearch;
  if (search === '') {
    saveSearch = '(no params included, returned all)';
  } else {
    saveSearch = search;
  };

  return dispatch => {
    return fetch(`http://localhost:3001/api/searches`, {
      method: 'post',
      body: JSON.stringify({search_term: saveSearch}),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }})
    .then( response => {
      // debugger;
      console.log('posted new search to database : ', response)
      dispatch({type: 'ADD_SEARCH', payload: saveSearch})
    });
  };
};

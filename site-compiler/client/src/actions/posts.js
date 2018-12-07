// Note : Actions for the Post Object

const apikey = process.env.REACT_APP_NEWSAPI_KEY;

// Note : Need to remove existing posts before displaying new ones
export const removePosts = () => {
  return {
    type: 'REMOVE_POSTS'
  }
}


export function fetchPosts(siteAPI, query) {
  console.log(`siteAPI = ${siteAPI} || query = ${query}`);
  return(dispatch) => {
    dispatch({type: 'LOADING_POSTS'});
    return fetch(`https://newsapi.org/v2/everything?sources=${siteAPI}&apiKey=${apikey}&q=${query}`)
    .then(
      console.log('fetched data')
      );
  };
}

// export function fetchPosts(siteAPI, query) {
//   console.log(`siteAPI = ${siteAPI} || query = ${query}`);
//   return(dispatch) => {
//     dispatch({type: 'LOADING_POSTS'});
//     return fetch(`https://newsapi.org/s/${siteAPI}&apiKey=${apikey}&q=${query}`)
//     .then(
//       console.log('fetched data'),
//       response => response.json())
//     .then(posts => {
//       console.log('fetch posts = ', posts)
//       dispatch({ type: 'FETCH_POSTS', payload: posts })
//     });
//   };
// }
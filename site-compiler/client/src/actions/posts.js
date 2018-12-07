// Note : Actions for the Post Object

const apikey = process.env.REACT_APP_NEWSAPI_KEY;

export function fetchPosts(siteAPI, query) {
  console.log(`siteAPI = ${siteAPI} || query = ${query}`);
  return(dispatch) => {
    dispatch({type: 'LOADING_POSTS'});
    return fetch(`https://newsapi.org/s/${siteAPI}&apiKey=${apikey}&q=${query}`)
    .then(
      console.log('fetched data'),
      response => response.json())
    .then(posts => {
      console.log('fetch posts = ', posts)
      dispatch({ type: 'FETCH_POSTS', payload: posts })
    });
  };
}
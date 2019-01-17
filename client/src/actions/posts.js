// Note : Actions for the Post Object

// Note : Grab key for newsAPI - to conceal key info
const newsApiKey = process.env.REACT_APP_NEWSAPI_KEY;

// Note : Need to remove existing posts before displaying new ones
export const removePosts = () => {
  return(dispatch) => {
    dispatch({type: 'REMOVE_POSTS'});
  };
}

export function fetchPosts(siteAPI, query) {
  // return(dispatch) => {

    console.log(`Search : ${siteAPI} for '${query}'`);
    let fetchURL = `https://newsapi.org/v2/top-headlines?sources=${siteAPI}`;
    if (query) { fetchURL += `&q=${query}` };
    // dispatch({type: 'LOADING_POSTS'});

    fetch(fetchURL, {
          crossDomain:true,
          method: 'GET',
          headers: {'Authorization':newsApiKey}
        }).then(response => response.json())
        .then(data => {
          console.log(data);
          // ***UPDATE "articles" to include site_id info
          // dispatch({ type: 'FETCH_POSTS', articles: data.articles })
      });
    // };
};

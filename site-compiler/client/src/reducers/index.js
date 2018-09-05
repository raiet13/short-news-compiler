import { combineReducers } from "redux";
import sitesReducer from "./sites_reducer";
import postsReducer from "./posts_reducer";
import searchesReducer from "./searches_reducer";
import siteSearchesReducer from "./site_searches_reducer";

const rootReducer = combineReducers({
  sites: sitesReducer,
  posts: postsReducer,
  searches: searchesReducer,
  siteSearches: siteSearchesReducer
});
 
export default rootReducer;

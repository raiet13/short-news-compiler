import { combineReducers } from "redux";
import postsReducer from "./posts_reducer";
import searchesReducer from "./searches_reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  searches: searchesReducer
});
 
export default rootReducer;

import { combineReducers } from './../../node_modules/redux';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer
});

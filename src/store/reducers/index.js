import { combineReducers } from 'redux';
import user from './user_reducer';
import posts from './posts_reducer';

const appReducers = combineReducers({
  posts,
  user
})

export default appReducers;
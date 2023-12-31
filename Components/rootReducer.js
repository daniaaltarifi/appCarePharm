// redux/reducers/index.js

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers go here if needed
});

export default rootReducer;

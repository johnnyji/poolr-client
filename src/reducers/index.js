import {combineReducers} from 'redux';
import app from './AppReducer';
import auth from './AuthReducer';

export default combineReducers({
  auth,
  app
});

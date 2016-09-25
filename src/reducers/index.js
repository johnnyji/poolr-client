import {combineReducers} from 'redux';
import app from './AppReducer';
import auth from './AuthReducer';
import trips from './TripsReducer';

export default combineReducers({
  auth,
  app,
  trips
});

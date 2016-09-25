import {createConstants} from 'create-reducer-redux';

export default createConstants([
  'AUTH',
  'AUTH_SUCCESS',
  'AUTH_EDIT_USER',
  'AUTH_EDIT_USER_SUCCESS',
  
  'APP_ADD_FLASH_MESSAGE',
  'APP_REMOVE_FLASH_MESSAGE',

  'TRIPS_CREATE_TRIP',
  'TRIPS_CREATE_TRIP_SUCCESS',
  'TRIPS_FETCH_TRIPS',
  'TRIPS_FETCH_TRIPS_SUCCESS',

]);

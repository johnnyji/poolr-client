import ActionTypes from './ActionTypes';
import request from 'request';

export default {

  create() {
    dispatch({type: ActionTypes.TRIPS_CREATE_TRIP});

    request('trips create path', (error, res, body) => {
      if (error) {
        dispatch(AppActionCreators.addFlashMessage('error', error.message));
      }
      
      dispatch({
        type: TRIPS_CREATE_TRIP_SUCCESS,
        data: {trip: body.trip}
      })
    });
  },

  fetch() {
    return (dispatch) => {
      dispatch({type: ActionTypes.TRIPS_FETCH_TRIPS});

      request('trips path', (error, res, body) => {
        if (error) {
          dispatch(AppActionCreators.addFlashMessage('error', error.message));
        }

        // TODO: whats the response?
        debugger;
        dispatch({
          type: ActionTypes.TRIPS_FETCH_TRIPS_SUCCESS,
          data: body.trips
        });
      });
    };
  },

};

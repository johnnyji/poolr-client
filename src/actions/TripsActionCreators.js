import ActionTypes from './ActionTypes';
import request from 'request';

export default {

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

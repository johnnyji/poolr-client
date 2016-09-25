import request from 'request';
import ActionCreators from './index';
import ActionTypes from './ActionTypes';

export default {
  
  login() {
    return (dispatch) => {
      dispatch({type: ActionTypes.AUTH}); 

      request('login path', (error, resp, body) => {
        if (error) {
          dispatch(ActionCreators.app.addFlashMessage('error', error.message));
          return;
        }

        // TODO: Where is the current user in the response JSON
        debugger;
        dispatch({
          type: ActionTypes.AUTH_SUCCESS,
          data: {currentUser: body.currentUser}
        });
      });
    };
  },

  update(id, attrs) {
    return (dispatch) => {
      // TODO: Is this dispatch necessary?
      // dispatch({type: ActionTypes.AUTH_EDIT_USER});

      request({
        url: 'edit pth',
        json: true,
        body: attrs
      }, (error, resp, body) => {
        if (error) {
          dispatch(ActionCreators.app.addFlashMessage('error', error.message));
          return;
        }

        // TODO: Where is the current user in the response JSON
        debugger;
        dispatch({
          type: ActionTypes.AUTH_EDIT_USER_SUCCESS,
          data: {currentUser: body.currentUser}
        });
      });
    };
  }

}

// import request from 'request';
import ActionCreators from './index';
import ActionTypes from './ActionTypes';
import jsonfile from 'jsonfile';
import config from '../config';

export default {
  
  login() {
    return (dispatch) => {

      dispatch({type: ActionTypes.AUTH}); 

      jsonfile.readFile(config.paths.data.currentUser, (err, user) => {
        if (err) {
          dispatch(ActionCreators.app.addFlashMessage('error', err.message));
          return;
        }

        dispatch({
          type: ActionTypes.AUTH_SUCCESS,
          data: {currentUser: user}
        });
      });

      // request('login path', (error, resp, body) => {
      //   if (error) {
      //     dispatch(ActionCreators.app.addFlashMessage('error', error.message));
      //     return;
      //   }

      //   // TODO: Where is the current user in the response JSON
      //   debugger;
      //   dispatch({
      //     type: ActionTypes.AUTH_SUCCESS,
      //     data: {currentUser: body.currentUser}
      //   });
      // });
    };
  },

  update(id, updatedUser) {
    return (dispatch) => {
      // TODO: Is this dispatch necessary?
      // dispatch({type: ActionTypes.AUTH_EDIT_USER});
      jsonfile.write(config.paths.data.currentUser, updatedUser, (err) => {
        if (err) {
          dispatch(ActionCreators.app.addFlashMessage('error', err.message));
          return;
        }

        dispatch({
          type: ActionTypes.AUTH_EDIT_USER_SUCCESS,
          data: {currentUser: updatedUser}
        });
      });

      // request({
      //   url: 'edit pth',
      //   json: true,
      //   body: attrs
      // }, (error, resp, body) => {
      //   if (error) {
      //     dispatch(ActionCreators.app.addFlashMessage('error', error.message));
      //     return;
      //   }

      //   // TODO: Where is the current user in the response JSON
      //   debugger;
      //   dispatch({
      //     type: ActionTypes.AUTH_EDIT_USER_SUCCESS,
      //     data: {currentUser: body.currentUser}
      //   });
      // });
    };
  }

}

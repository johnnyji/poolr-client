import request from 'request';

export default {
  
  login() {
    dispatch({type: AUTH}); 

    return (dispatch) => {
      request('login path', (err, resp, body) => {
        debugger;
        if (error) {
          // Handle Error Case
        }

        dispatch({
          type: AUTH_SUCCESS,
          data: {currentUser: body.currentUser}
        });
      });
    };
  }

}

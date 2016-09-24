import ActionTypes from '../actions/ActionTypes';

const initState = {
  authing: false,
  currentUser: null,
};

export default (state = initState, {type, data}) => {
  switch (type) {
    case ActionTypes.AUTH:
      return {...state, authing: true};
    case ActionTypes.AUTH_SUCCESS:
      return {...state, authing: false, currentUser: data.currentUser};
    default:
      return state;
  }
};

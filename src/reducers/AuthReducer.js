import {
  AUTH,
  AUTH_SUCCESS
} from '../actions/ActionTypes';

const initState = {
  authing: false,
  currentUser: null,
};

export default (state = initState, {type, data}) => {
  switch (type) {
    case AUTH:
      return {...state, authing: true};
    case AUTH_SUCCESS:
      return {...state, authing: false, currentUser: data.currentUser};
    default:
      return state;
  }
};

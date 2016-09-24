import ActionTypes from '../actions/ActionTypes';
import {OrderedMap} from 'immutable';

const initState = {
  flashMessages: OrderedMap()
};

const addFlashMessage = (state, {id, message}) => {
  const updated = state.flashMessages.set(id, message);
  return {...state, flashMessages: updated};
};

export default (state = initState, {type, data}) => {
  switch (type) {
    case ActionTypes.APP_ADD_FLASH_MESSAGE:
      return addFlashMessage(state, data);

    case ActionTypes.APP_REMOVE_FLASH_MESSAGE:
      return {...state, flashMessages: state.flashMessages.delete(data.id)};

    default:
      return state;
  }
};

import ActionTypes from './ActionTypes';
import uuid from 'node-uuid';
import {FlashMessage} from 'ui-components/src/FlashMessage';
import React from 'react';

export default {

  addFlashMessage(type, message) {
    const id = uuid.v4();
    const stringMessage = typeof message === 'string' ? message : JSON.stringify(message);
    const flash = (
      <FlashMessage
        id={id}
        message={stringMessage}
        key={id}
        type={type} />
    );

    return {
      type: ActionTypes.APP_ADD_FLASH_MESSAGE,
      data: {id, message: flash}
    };
  },

  removeFlashMessage(id) {
    return {
      type: ActionTypes.APP_REMOVE_FLASH_MESSAGE,
      data: {id}
    };
  }

};

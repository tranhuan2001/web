import * as Types from '../constants/ActionTypes';
import * as Messages from '../constants/Messages';

var initialValue = Messages.MSG_WELCOME;

const message = (state = initialValue, action) => {
   switch (action.type) {
      case Types.CHANGE_MESSAGE:
         return action.message;
      default:
         return state;
   }
};

export default message;

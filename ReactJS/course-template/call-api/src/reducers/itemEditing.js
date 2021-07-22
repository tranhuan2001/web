import * as Types from '../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
   switch (action.type) {
      case Types.EDIT_PRODUCT:
         console.log(action)
         state = action.payload.product;
         return { ...state };

      default:
         return { ...state };
   }
};

export default itemEditing;

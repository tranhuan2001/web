import * as Types from '../constants/ActionTypes';

var initialState = [];

var findIndex = (products, id) => {
   var result = -1;
   products.forEach((product, index) => {
      if (product.id === id) {
         result = index;
      }
   });
   return result;
};

const products = (state = initialState, action) => {
   var { payload } = action;
   switch (action.type) {
      case Types.FETCH_PRODUCTS:
         state = payload.products;
         return [...state];

      case Types.DELETE_PRODUCT:
         var index = findIndex(state, payload.id);
         if (index !== -1) {
            state.splice(index, 1);
         }
         return [...state];

      case Types.ADD_PRODUCT:
         state.push(payload.product);
         return [...state];

      case Types.UPDATE_PRODUCT:
         var indexUpdate = findIndex(state, payload.product.id);
         if (indexUpdate !== -1) {
            state[indexUpdate] = payload.product;
         }
         return [...state];

      default:
         return [...state];
   }
};

export default products;

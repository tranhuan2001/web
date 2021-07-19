import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialValue = data ? data : [];

const cart = (state = initialValue, action) => {
   var { product, quantity } = action;
   var index = -1;
   switch (action.type) {
      case Types.ADD_TO_CART:
         index = state.findIndex((item) => item.product.id === product.id);
         if (index !== -1) {
            state[index].quantity += quantity;
         } else {
            state.push({
               product,
               quantity,
            });
         }
         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

      case Types.REMOVE_CART_ITEM:
         index = state.findIndex((item) => item.product.id === product.id);
         if (index !== -1) {
            state.splice(index, 1);
         }
         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

      case Types.MINUS_PRODUCT:
         index = state.findIndex((item) => item.product.id === product.id);
         if (index !== -1) {
            if (state[index].quantity === 1) {
               state.splice(index, 1);
            } else {
               state[index].quantity -= 1;
            }
         }
         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

      case Types.PLUS_PRODUCT:
         index = state.findIndex((item) => item.product.id === product.id);
         if (index !== -1) {
            state[index].quantity += 1;
         }
         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

      default:
         return [...state];
   }
};

export default cart;

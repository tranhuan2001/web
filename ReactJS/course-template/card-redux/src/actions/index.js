import * as types from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
   return {
      type: types.ADD_TO_CART,
      product,
      quantity,
   };
};

export const actChangeMessage = (message) => {
   return {
      type: types.CHANGE_MESSAGE,
      message,
   };
};

export const actRemoveCartItem = (product) => {
   return {
      type: types.REMOVE_CART_ITEM,
      product,
   };
};

export const actPlusProduct = (product) => {
   return {
      type: types.PLUS_PRODUCT,
      product,
   };
};

export const actMinusProduct = (product) => {
   return {
      type: types.MINUS_PRODUCT,
      product,
   };
};

import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProducts = (products) => {
   return {
      type: Types.FETCH_PRODUCTS,
      payload: {
         products,
      },
   };
};

export const actFetchProductsRequest = () => {
   return async (dispatch) => {
      const res = await callApi('products', 'GET', null);
      dispatch(actFetchProducts(res.data));
   };
};

export const actDeleteProduct = (id) => {
   return {
      type: Types.DELETE_PRODUCT,
      payload: {
         id,
      },
   };
};

export const actDeleteProductRequest = (id) => {
   return async (dispatch) => {
      await callApi(`products/${id}`, 'DELETE', null);
      dispatch(actDeleteProduct(id));
   };
};

export const actAddProduct = (product) => {
   return {
      type: Types.ADD_PRODUCT,
      payload: {
         product,
      },
   };
};

export const actAddProductRequest = (product) => {
   return async (dispatch) => {
      const res = await callApi('products', 'POST', product);
      dispatch(actAddProduct(res.data));
   };
};

export const actGetProduct = (product) => {
   return {
      type: Types.EDIT_PRODUCT,
      payload: {
         product,
      },
   };
};

export const actGetProductRequest = (id) => {
   return async (dispatch) => {
      const res = await callApi(`products/${id}`, 'GET', null);
      dispatch(actGetProduct(res.data));
   };
};

export const actUpdateProduct = (product) => {
   return {
      type: Types.UPDATE_PRODUCT,
      payload: {
         product,
      },
   };
};

export const actUpdateProductRequest = (product) => {
   return async (dispatch) => {
      const res = await callApi(`products/${product.id}`, 'PUT', product);
      dispatch(actUpdateProduct(res.data));
   };
};

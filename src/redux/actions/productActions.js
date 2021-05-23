import { ActionTypes } from '../constants/action-types';

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PROD,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECT_PROD,
    payload: product,
  };
};

export const deleteProduct = () => {
  return {
    type: ActionTypes.DELET_PROD,
  };
};

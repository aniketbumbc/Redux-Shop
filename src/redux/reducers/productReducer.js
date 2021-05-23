import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROD: {
      return { ...state, products: action.payload };
    }
    case ActionTypes.SELECT_PROD: {
      return { ...state, product: action.payload };
    }
    case ActionTypes.DELET_PROD: {
      return { ...state };
    }
    default:
      return state;
  }
};

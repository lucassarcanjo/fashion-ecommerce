import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const removeFromCart = (productSku) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productSku,
    },
  };
};

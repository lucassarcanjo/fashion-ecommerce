import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QTY_CART } from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const removeFromCart = (productSku, quantity) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productSku,
      quantity,
    },
  };
};

export const updateQtyCart = (sku, quantity) => {
  return {
    type: UPDATE_QTY_CART,
    payload: {
      sku,
      quantity,
    },
  };
};

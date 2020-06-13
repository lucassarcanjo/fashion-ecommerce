import { SET_PRODUCTS } from "./actionTypes";

export const setProducts = ({ allProducts, latest, recommend }) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      allProducts,
      latest,
      recommend,
    },
  };
};

import { SET_PRODUCTS } from "./actionTypes";

export const setProducts = (allProducts, recommend, latest, sale) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      allProducts,
      recommend,
      latest,
      sale,
    },
  };
};

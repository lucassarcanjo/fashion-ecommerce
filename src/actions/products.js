import { SET_PRODUCTS } from "./actionTypes";

export const setProducts = ({ all, latest, black, sale }) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      all,
      latest,
      black,
      sale,
    },
  };
};

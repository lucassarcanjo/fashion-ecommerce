import { SET_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  allProducts: [],
  recommend: [],
  latest: [],
  sale: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const { allProducts, recommend, latest, sale } = action.payload;

      return {
        ...state,
        allProducts,
        recommend,
        latest,
        sale,
      };
    }

    default:
      return state;
  }
};

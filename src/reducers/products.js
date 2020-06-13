import { SET_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  allProducts: [],
  recommend: {},
  latest: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const { allProducts, recommend, latest } = action.payload;

      return {
        ...state,
        allProducts,
        recommend,
        latest,
      };
    }

    default:
      return state;
  }
};

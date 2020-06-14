import { SET_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  all: [],
  sale: [],
  black: [],
  latest: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const { all, sale, black, latest } = action.payload;

      return {
        ...state,
        all,
        sale,
        black,
        latest,
      };
    }

    default:
      return state;
  }
};

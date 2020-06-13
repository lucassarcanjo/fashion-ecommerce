import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initalState = {
  items: [],
  total: 0,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action.payload;

      const addedItem = state.items.find((item) => item.sku === product.sku);

      if (addedItem) {
        addedItem.quantity += product.quantity;
      } else {
        state.items.push(product);
      }

      state.total += product.quantity;

      return state;
    }

    case REMOVE_FROM_CART: {
      const { productSku } = action.payload;

      const productsFiltered = state.items.filter(
        (item) => item.sku !== productSku
      );

      return {
        ...state,
        productsFiltered,
      };
    }

    default:
      return state;
  }
};

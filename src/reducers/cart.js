import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QTY_CART,
} from "../actions/actionTypes";

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
      const { productSku, quantity } = action.payload;

      const items = state.items.filter((item) => item.sku !== productSku);
      state.total -= quantity;
      return {
        ...state,
        items,
      };
    }

    case UPDATE_QTY_CART: {
      const { sku, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.sku === sku);
      const product = state.items[index];
      let totalQuantity = state.total;

      totalQuantity -= product.quantity;
      product.quantity = quantity;
      totalQuantity += product.quantity;

      return {
        ...state,
        total: totalQuantity,
      };
    }

    default:
      return state;
  }
};

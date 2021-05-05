import { UPDATE_CART_ITEM, REMOVE_CART_ITEM, SET_FILTER } from "./actionTypes";

const applicationState = {
  item: 0,
  cart: [],
  filter: null,
};

function reducer(state = applicationState, action) {
  switch (action.type) {
    case UPDATE_CART_ITEM: {
      const found = state.cart.find(
        (element) => element.id === action.payload.id
      );

      if (found) {
        return {
          ...state,
          item: state.item + 1,
          cart: state.cart.map((element) => {
            if (element.id === action.payload.id) {
              return { ...element, quantity: element.quantity + 1 };
            }
            return element;
          }),
        };
      } else {
        return {
          ...state,
          item: state.item + 1,
          cart: state.cart.concat({ ...action.payload, quantity: 1 }),
        };
      }
    }

    case REMOVE_CART_ITEM: {
      const findItem = state.cart.find(
        (element) => element.id === action.payload.id
      );

      if (findItem) {
        if (findItem.quantity > 1) {
          return {
            ...state,
            item: state.item - 1,
            cart: state.cart.map((element) => {
              if (element.id === action.payload.id) {
                return { ...element, quantity: element.quantity - 1 };
              }
              return element;
            }),
          };
        } else {
          return {
            ...state,
            item: state.item - 1,
            cart: state.cart.filter(
              (element) => element.id !== action.payload.id
            ),
          };
        }
      } else {
        console.log("Item not found!");
        return { ...state };
      }
    }

    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return applicationState;
  }
}

export default reducer;

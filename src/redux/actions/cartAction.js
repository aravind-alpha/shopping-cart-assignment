import { UPDATE_CART_ITEM, REMOVE_CART_ITEM } from "../actionTypes";

export const updateCartItem = (payload = null) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: payload,
  };
};

export const removeCartItem = (payload = null) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: payload,
  };
};

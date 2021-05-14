import { SET_FILTER } from "../actionTypes";

export const setFilter = (payload = null) => {
  return {
    type: SET_FILTER,
    payload: payload,
  };
};

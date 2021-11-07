import { SET_CHECKOUT } from "../actions/checkout";

const initialState = null;

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKOUT:
      return action.payload;
    default:
      return state;
  }
};

export default checkout;

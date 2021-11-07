import { GET_CATEGORY } from "../actions/category";

const initialState = {
  categories: [],
  error: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default category;

import { GET_HERO, GET_TESTIMONY } from "../actions/general";

const initialState = {
  hero: {},
  testimony: {},
  error: false,
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO:
      return {
        ...state,
        hero: action.payload.hero,
        error: action.payload.error,
      };
    case GET_TESTIMONY:
      return {
        ...state,
        testimony: action.payload.testimony,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default general;

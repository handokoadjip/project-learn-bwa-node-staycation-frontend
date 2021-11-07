import { GET_MOSTPICKED, SHOW_VACATION } from "../actions/vacation";

const initialState = {
  mostPickeds: [],
  error: false,
};

const vacation = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOSTPICKED:
      return {
        ...state,
        mostPickeds: action.payload.mostPickeds,
        error: action.payload.error,
      };
    case SHOW_VACATION:
      return {
        ...state,
        [action.payload.id]: action.payload.vacation,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default vacation;

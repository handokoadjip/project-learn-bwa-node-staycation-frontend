import axios from "config/axios";

export const GET_MOSTPICKED = "GET_MOSTPICKED";
export const SHOW_VACATION = "SHOW_VACATION";

const getMostPicked = () => (dispacth) => {
  axios
    .get(`/vacation/most-picked`)
    .then((response) => {
      dispacth({
        type: GET_MOSTPICKED,
        payload: {
          mostPickeds: response.data.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispacth({
        type: GET_MOSTPICKED,
        payload: {
          error: error.message,
        },
      });
    });
};

const showVacation = (id) => (dispacth) => {
  axios
    .get(`/vacation/${id}`)
    .then((response) => {
      dispacth({
        type: SHOW_VACATION,
        payload: {
          vacation: response.data.data,
          id: id,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispacth({
        type: SHOW_VACATION,
        payload: {
          error: error.message,
        },
      });
    });
};

export { getMostPicked, showVacation };

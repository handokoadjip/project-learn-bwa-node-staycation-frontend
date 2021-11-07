import axios from "config/axios";

export const GET_CATEGORY = "GET_CATEGORY";

const getCategory = () => (dispacth) => {
  axios
    .get(`/category`)
    .then((response) => {
      dispacth({
        type: GET_CATEGORY,
        payload: {
          categories: response.data.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispacth({
        type: GET_CATEGORY,
        payload: {
          error: error.message,
        },
      });
    });
};

export { getCategory };

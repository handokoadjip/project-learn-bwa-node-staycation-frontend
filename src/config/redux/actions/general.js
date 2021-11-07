import axios from "config/axios";

export const GET_HERO = "GET_HERO";
export const GET_TESTIMONY = "GET_TESTIMONY";

const getHero = () => (dispacth) => {
  axios
    .get(`/general/hero`)
    .then((response) => {
      dispacth({
        type: GET_HERO,
        payload: {
          hero: response.data.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispacth({
        type: GET_HERO,
        payload: {
          error: error.message,
        },
      });
    });
};

const getTestimony = () => (dispacth) => {
  axios
    .get(`/general/testimony`)
    .then((response) => {
      dispacth({
        type: GET_TESTIMONY,
        payload: {
          testimony: response.data.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispacth({
        type: GET_TESTIMONY,
        payload: {
          error: error.message,
        },
      });
    });
};

export { getHero, getTestimony };

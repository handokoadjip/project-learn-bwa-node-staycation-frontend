import axios from "config/axios";

export const SET_CHECKOUT = "SET_CHECKOUT";

const tempCheckout = (payload) => (dispacth) => {
  dispacth({
    type: SET_CHECKOUT,
    payload,
  });
};

const storeCheckout = (data, checkout) => (dispacth) => {
  const payload = new FormData();

  payload.append("firstName", data.firstName);
  payload.append("lastName", data.lastName);
  payload.append("email", data.email);
  payload.append("phoneNumber", data.phone);
  payload.append("vacationId", checkout._id);
  payload.append("duration", checkout.duration);
  payload.append("bookingStartDate", checkout.date.startDate);
  payload.append("bookingEndDate", checkout.date.endDate);
  payload.append("accountHolder", data.bankHolder);
  payload.append("bankFrom", data.bankName);
  payload.append("image", data.proofPayment[0]);

  return axios.post(`/booking/store`, payload, {
    headers: { "content-type": "multipart/form-data" },
  });
};

export { tempCheckout, storeCheckout };

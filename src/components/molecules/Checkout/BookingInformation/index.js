import React from "react";
import Fade from "react-reveal/Fade";

import NumberFormat from "react-number-format";
import { InputText } from "components/atoms";

const index = (props) => {
  const { data, ItemDetails, checkout } = props;
  return (
    <Fade>
      <section className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-12 col-md-5 border-right py-md-5"
            style={{ paddingRight: 80 }}
          >
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageUrls[0].url}`}
                    alt={ItemDetails.name}
                  />
                </figure>
                <div className="row align-items-center mt-3">
                  <div className="col-md-6">
                    <div className="meta-wrapper m-0">
                      <h2 className="h5 m-0">{ItemDetails.name}</h2>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <span>
                      <NumberFormat
                        value={+checkout.duration * ItemDetails.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        suffix=" USD"
                        className="font-weight-medium"
                      />{" "}
                      <span className="text-gray-500"> per </span>
                      <span className="font-weight-medium">
                        {checkout.duration} {ItemDetails.unit}
                        {+checkout.duration > 1 ? "s" : ""}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-md-5 py-md-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default index;

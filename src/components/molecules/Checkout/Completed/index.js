import { IllustrationComplete } from "assets/images/ilustration";
import React from "react";
import Fade from "react-reveal/Fade";

const index = () => {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={IllustrationComplete}
              className="img-fluid"
              alt="completed checkout apartment"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default index;

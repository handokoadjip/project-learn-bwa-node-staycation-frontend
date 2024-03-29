import React from "react";
import Fade from "react-reveal/Fade";

const index = (props) => {
  return (
    <Fade>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-3">{props.children}</div>
        </div>
      </section>
    </Fade>
  );
};

export default index;

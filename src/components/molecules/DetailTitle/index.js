import React from "react";
import { BreadCrumb } from "components/atoms";
import Fade from "react-reveal/Fade";

const index = ({ detail, breadcrumb }) => {
  return (
    <section className="container spacing-sm">
      <Fade bottom delay={200} distance="10px">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <BreadCrumb data={breadcrumb} />
          </div>
          <div className="col-12 col-md-4 text-center">
            <h1 className="h2">{detail.name}</h1>
            <span className="text-gray-400">
              {detail.city}, {detail.country}
            </span>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default index;

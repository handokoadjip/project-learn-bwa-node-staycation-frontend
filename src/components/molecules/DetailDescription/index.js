import React from "react";
import ReactHtmlParser from "react-html-parser";

const index = ({ detail }) => {
  return (
    <div>
      <main>
        <h2 className="h4">About the place</h2>
        <div className="font-weight-light text-gray-500">
          {ReactHtmlParser(detail.description)}
        </div>
        <div className="row" style={{ marginTop: 30 }}>
          {detail.features.map((feature, index) => {
            return (
              <div
                key={`feature-${index}`}
                className="col-6 col-md-3"
                style={{ marginBottom: 20 }}
              >
                <img
                  width="38"
                  height="38"
                  className="mr-3 ml-3 ml-md-0 d-md-block mb-2"
                  src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                  alt={feature.name}
                />
                <span>{feature.qty} </span>
                <span className="text-gray-500 font-weight-light">
                  {feature.name}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default index;

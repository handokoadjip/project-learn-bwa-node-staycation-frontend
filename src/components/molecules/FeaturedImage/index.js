import React from "react";
import Fade from "react-reveal/Fade";

const index = ({ images }) => {
  return (
    <section className="container">
      <div className="container-grid sm">
        {images.map((images, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade bottom delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={`${process.env.REACT_APP_HOST}/${images.url}`}
                      alt={images._id}
                      style={
                        index === 0
                          ? {
                              height: 643.3,
                              objectFit: "cover",
                            }
                          : { height: 316.64, objectFit: "cover" }
                      }
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;

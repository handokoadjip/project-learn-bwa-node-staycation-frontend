import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

import { Button } from "components/atoms";

const index = ({ category, title, obkey, index1 }) => {
  return (
    <section id="category" className="container">
      <Fade bottom distance="10px">
        <h2 className="h4 mb-3 font-weight-medium">{title ?? category.name}</h2>
        <div className="container-grid">
          {category[obkey].length === 0 ? (
            <div className="item column-12 row-1 align-self-center text-center">
              There is no vacation at this category
            </div>
          ) : (
            category[obkey].map((item, index2) => {
              return (
                <div
                  className="item column-6 column-md-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2} distance="10px">
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                          alt={`item ${item.name}`}
                          className="img-cover img-rounded"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          href={`/properties/${item._id}`}
                          type="link"
                          className="stretched-link d-block text-secondary"
                        >
                          <h3 className="font-weight-normal">{item.name}</h3>
                          <span className="text-gray-500 font-weight-light">
                            {item.city}, {item.country}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })
          )}
        </div>
      </Fade>
    </section>
  );
};

index.propTypes = {
  category: propTypes.object.isRequired,
  title: propTypes.string,
  obkey: propTypes.string,
  index1: propTypes.number,
};

export default index;

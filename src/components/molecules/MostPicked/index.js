import { Button } from "components/atoms";
import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import Fade from "react-reveal/Fade";

import { useDispatch, useSelector } from "react-redux";
import { getMostPicked } from "config/redux/actions";
import Loader from "react-loader-spinner";

const index = (props) => {
  const { mostPickeds, error } = useSelector((state) => state.vacation);

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(mostPickeds).length === 0) dispatch(getMostPicked());
  }, [dispatch]);

  return (
    <section id="most-picked" className="container" ref={props.refMostPicked}>
      <Fade bottom delay={300} distance="10px">
        <h2 className="h4 mb-3">Most Picked</h2>
        <div className="container-grid ">
          {mostPickeds ? (
            mostPickeds.map((vacation, index) => {
              return (
                <div
                  className={`item column-12 column-md-4 ${
                    index === 0 ? "row-2" : "row-1"
                  }`}
                  key={`most-picked-${index}`}
                >
                  <div className="card card-featured h-100">
                    <div className="tag">
                      <NumberFormat
                        className="price"
                        value={vacation.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                      <span className="font-weight-light">
                        {" "}
                        per {vacation.unit}
                      </span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${vacation.imageUrl}`}
                        alt={`most picked vacation ${vacation.name}`}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        href={`/properties/${vacation._id}`}
                        type="link"
                        className="stretched-link d-block text-white"
                      >
                        <h3 className="font-weight-normal">{vacation.name}</h3>
                        <span>
                          {vacation.city}, {vacation.country}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : error ? (
            <div className="item column-12">
              <h1 className="text-center my-5">{error}</h1>
            </div>
          ) : (
            <div className="col-4 text-center align-self-center">
              <Loader type="TailSpin" color="#00BFFF" height={36} width={36} />
            </div>
          )}
        </div>
      </Fade>
    </section>
  );
};

export default index;

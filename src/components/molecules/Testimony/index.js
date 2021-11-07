import { ImageTestimonyFrame } from "assets/images";
import { Button, Star } from "components/atoms";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

import { useDispatch, useSelector } from "react-redux";
import { getTestimony } from "config/redux/actions";
import Loader from "react-loader-spinner";

const index = () => {
  const { testimony, error } = useSelector((state) => state.general);

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(testimony).length === 0) dispatch(getTestimony());
  }, [dispatch]);

  return testimony ? (
    <section className="container" id="testimony">
      <Fade bottom distance="10px">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${testimony.imageUrl}`}
                alt="Testimony"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={ImageTestimonyFrame}
                alt="Testimony Frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          <div className="col-md-7 mt-5 mt-md-0 text-center text-md-left">
            <h2 className="h4" style={{ marginBottom: 40 }}>
              {testimony.name}
            </h2>
            <Star value={testimony.rate} width={35} height={35} spacing={4} />
            <p className="h2 line-height-2 my-3">{testimony.content}</p>
            <span className="text-gray-500">
              {testimony.familyName}, {testimony.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5 mt-5"
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${testimony._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  ) : error ? (
    <h1 className="text-center my-5">{error}</h1>
  ) : (
    <div className="text-center align-self-center mx-5">
      <Loader type="TailSpin" color="#00BFFF" height={36} width={36} />
    </div>
  );
};
export default index;

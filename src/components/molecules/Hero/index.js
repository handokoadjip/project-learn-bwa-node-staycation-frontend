import React, { useEffect } from "react";
import { ImageHero } from "assets/images/hero";
import { Button } from "components/atoms";
import NumberFormat from "react-number-format";
import Fade from "react-reveal/Fade";

import { useDispatch, useSelector } from "react-redux";
import { getHero } from "config/redux/actions";
import Loader from "react-loader-spinner";

const index = (props) => {
  const { hero, error } = useSelector((state) => state.general);

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(hero).length === 0) dispatch(getHero());
  }, [dispatch]);

  const scrollMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="container">
      <Fade bottom delay={200} distance="10px">
        <div className="row align-items-center text-center text-lg-left">
          <div className="col-lg-6 order-2 order-lg-1">
            <h1 className="mb-3 line-height-1 hero-title">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 pr-lg-5 w-lg-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your <br />
              holiday with family. Time to make another <br />
              memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={scrollMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row mt-5 d-flex justify-content-between">
              {hero ? (
                <>
                  <div className="col-4 text-center text-lg-left">
                    {hero.travelers ? (
                      <>
                        <img
                          src="images/icon/icon-traveler.svg"
                          alt={`${hero.travelers} travelers`}
                          height="36"
                        />
                        <h6 className="mt-3">
                          <NumberFormat
                            value={hero.travelers}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                          <span className="font-weight-ligth text-gray-500">
                            <br className="d-lg-none" /> travelers
                          </span>
                        </h6>
                      </>
                    ) : (
                      <div className="col-4 text-center align-self-center">
                        <Loader
                          type="TailSpin"
                          color="#00BFFF"
                          height={36}
                          width={36}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-4 text-center text-lg-left">
                    {hero.treasures ? (
                      <>
                        <img
                          src="images/icon/icon-treasure.svg"
                          alt={`${hero.treasures} trasures`}
                          height="36"
                        />
                        <h6 className="mt-3">
                          <NumberFormat
                            value={hero.treasures}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                          <span className="font-weight-ligth text-gray-500">
                            <br className="d-lg-none" /> treasures
                          </span>
                        </h6>
                      </>
                    ) : (
                      <div className="col-4 text-center align-self-center">
                        <Loader
                          type="TailSpin"
                          color="#00BFFF"
                          height={36}
                          width={36}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-4 text-center text-lg-left">
                    {hero.cities ? (
                      <>
                        <img
                          src="images/icon/icon-city.svg"
                          alt={`${hero.cities} cities`}
                          height="36"
                        />
                        <h6 className="mt-3">
                          <NumberFormat
                            value={hero.cities}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                          <span className="font-weight-ligth text-gray-500">
                            <br className="d-lg-none" /> Cities
                          </span>
                        </h6>
                      </>
                    ) : (
                      <div className="col-4 text-center align-self-center">
                        <Loader
                          type="TailSpin"
                          color="#00BFFF"
                          height={36}
                          width={36}
                        />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="item column-12">
                  <h1 className="text-center my-5">{error}</h1>
                </div>
              )}
              ;
            </div>
          </div>

          <div className="col-lg-6 pl-5 order-1 order-lg-2 mb-5 mb-lg-0">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default index;

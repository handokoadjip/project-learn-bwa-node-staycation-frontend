import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { connect } from "react-redux";

import { Header } from "components/molecules";
import { Button } from "components/atoms";

import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "components/molecules/Stepper";

import {
  BookingInformation,
  Payment,
  Completed,
} from "components/molecules/Checkout";

import { DataDetail } from "json";

import { storeCheckout } from "config/redux/actions/checkout";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        proofPayment: "",
        bankName: "",
        bankHolder: "",
      },
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  _Submit = (nextStep) => {
    const { data } = this.state;
    console.log(data);
    const { checkout } = this.props;

    this.props.storeCheckout(data, checkout).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, vacation } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih kamar dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={vacation[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },

      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            ItemDetails={DataDetail}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },

      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCenter />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Numbering
                  data={steps}
                  current={CurrentStep}
                  style={{ marginBottom: 50 }}
                />
                <Meta data={steps} current={CurrentStep} />
                <MainContent data={steps} current={CurrentStep} />
                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" &&
                      data.lastName !== "" &&
                      data.email !== "" &&
                      data.phone !== "" && (
                        <Fade>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue to Book
                          </Button>
                        </Fade>
                      )}
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isLight
                      href={`/properties/${checkout._id}`}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}
                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                        <Fade>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={() => this._Submit(nextStep)}
                          >
                            Continue to Book
                          </Button>
                        </Fade>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}
                {CurrentStep === "completed" && (
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href=""
                    >
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  vacation: state.vacation,
});

export default connect(mapStateToProps, { storeCheckout })(index);

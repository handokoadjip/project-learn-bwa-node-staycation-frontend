import React, { Component } from "react";
import propTypes from "prop-types";
import { Button, InputNumber, InputDate } from "components/atoms";
import NumberFormat from "react-number-format";
import { withRouter } from "react-router-dom";

import "./index.scss";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  startBooking = () => {
    const { data } = this.state;

    this.props.startBooking({
      _id: this.props.detail._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });

    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { detail, startBooking } = this.props;
    return (
      <div className="card border rounded" style={{ padding: "60px 80px" }}>
        <h3 className="h4 mb-3">Start Booking</h3>
        <p className="h2 text-teal mb-4">
          <NumberFormat
            value={detail.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />{" "}
          <span className="text-gray-500 font-weight-light">
            per {detail.unit}
          </span>
        </p>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <h4
          className="h6 text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900">
            <NumberFormat
              value={detail.price * data.duration}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />{" "}
            USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900">
            {data.duration} {detail.unit}
          </span>
        </h4>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
}

index.propTypes = {
  detail: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(index);

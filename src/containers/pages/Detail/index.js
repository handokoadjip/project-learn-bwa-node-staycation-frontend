import {
  BookingForm,
  DetailDescription,
  DetailTitle,
  FeaturedImage,
  Header,
  Testimony,
} from "components/molecules";
import Fade from "react-reveal/Fade";
import Loader from "react-loader-spinner";

import React, { Component } from "react";
import Footer from "components/molecules/Footer";

import { connect } from "react-redux";
import { tempCheckout } from "config/redux/actions/checkout";
import { showVacation } from "config/redux/actions/vacation";
import { Item } from "components/atoms";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Detail";

    const { vacation, match } = this.props;

    const id = match.params.id;
    if (!vacation[id]) this.props.showVacation(`${id}`);
  }

  render() {
    const { vacation, match } = this.props;
    const id = match.params.id;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return vacation[id] ? (
      <>
        <Header {...this.props} />
        <DetailTitle breadcrumb={breadcrumb} detail={vacation[id]} />
        <FeaturedImage images={vacation[id].imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-7 pr-3">
              <Fade delay={400}>
                <DetailDescription detail={vacation[id]} />
              </Fade>
            </div>
            <div className="col-12 col-md-5 mt-4 mt-md-0">
              <Fade delay={400}>
                <BookingForm
                  detail={vacation[id]}
                  startBooking={this.props.tempCheckout}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Item
          category={vacation[id]}
          title="Treasure to Choose"
          obkey="treasures"
          index1={1}
        />
        <Testimony testimony={vacation[id].testimonial} />
        <Footer />
      </>
    ) : vacation.error ? (
      <div className="item column-12">
        <h1 className="text-center my-5">{vacation.error}</h1>
      </div>
    ) : (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Loader type="TailSpin" color="#00BFFF" height={36} width={36} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vacation: state.vacation,
});

export default connect(mapStateToProps, { tempCheckout, showVacation })(index);

import {
  Category,
  Header,
  Hero,
  MostPicked,
  Testimony,
} from "components/molecules";
import React, { Component } from "react";
import Footer from "components/molecules/Footer";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Homepage";
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} />
        <MostPicked refMostPicked={this.refMostPicked} />
        <Category />
        <Testimony />
        <Footer />
      </>
    );
  }
}

export default index;

import React, { Component } from "react";
import Slider from "./components/Slider";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Photogallery from "./components/photogallery";
export default class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <Photogallery />
        <Instagram token={process.env.REACT_APP_INS_TOKEN} limit={7} />
        <Footer />
      </>
    );
  }
}

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GetImage from "./components/getimageGallery";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

export default class Gallery extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <Container className="center">
          <div className="Gallery__image__box">
            <GetImage token={process.env.REACT_APP_GOOGLE_TOKEN_GALLERY}/>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import jumbobg from "./image/bg/38.jpg";
import styled from "styled-components";
import "./components.css";

var id = window.location.pathname;
if (id == "/Gallery") {
  id = "Галерея";
}
if (id == "/About") {
  id = "О нас";
}
if (id == "/Contact") {
  id = "Контакты";
}

const Styles = styled.div`
  .jumbo {
    background: url(${jumbobg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 370px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
  <>
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <div className="jumbo__content">
          <Container>
            <div className="jumbo__text justify-content-center">
              <h1>{id}</h1>
            </div>
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a className="breadcrumb-item-a" href="/">
                  {" "}
                  Главная
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {id}
              </li>
            </ol>
          </Container>
        </div>
      </Jumbo>
    </Styles>
  </>
);
export default Jumbotron;

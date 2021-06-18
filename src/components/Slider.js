import React, { Component } from "react";
import { Carousel} from "react-bootstrap";
import FirstSlide from "./image/bg/1.jpg";
import SecondSlide from "./image/bg/2.jpg";
import "animate.css";
import "./components.css";

export default class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src={FirstSlide}
            className="d-block w-100 slider__image"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="slider__main__text animate__animated animate__bounceInDown animate__delay-1s animate__slow">
              {"Привет \n меня зовут Илья"}
            </h2>
            <p className="slider__other__text animate__animated animate__bounceInDown animate__delay-1s ">
              {
                "Я фотографирую очень инстинктивно.  Я вижу, как это воспринимается. \n  Я не следую определенным стилям, философиям или учителям."
              }
            </p>
            <div className="slider__contact animate__animated animate__bounceInDown animate__delay-1s animate__fast">
              <a href="/Contact">
                <button className="btn_contact"> Связаться</button>
              </a>
              <a href="/">
                <p className="slider__mail">petunin_i2001@mail.ru</p>
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SecondSlide}
            className="d-block w-100 slider__image"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="slider__main__text animate__animated animate__bounceInDown animate__delay-1s animate__slow">
              {"Привет \n меня зовут Илья"}
            </h2>
            <p className="slider__other__text animate__animated animate__bounceInDown animate__delay-1s ">
              {
                "Я фотографирую очень инстинктивно.  Я вижу, как это воспринимается. \n  Я не следую определенным стилям, философиям или учителям."
              }
            </p>
            <div className="slider__contact animate__animated animate__bounceInDown animate__delay-1s animate__fast">
              <a href="/Contact">
                <button className="btn_contact"> Связаться</button>
              </a>
              <a href="/">
                <p className="slider__mail">petunin_i2001@mail.ru</p>
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

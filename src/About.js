import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron as Jumb, Container } from "react-bootstrap";
import Jumbo from "./components/Jumbotron";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faCamera, faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import Photomember1 from "./components/image/bg/19.jpg";
import Photomember2 from "./components/image/bg/21.jpg";
import Photomember3 from "./components/image/bg/22.jpg";
import Photomember4 from "./components/image/bg/14.jpg";
import Instagram from "./components/Instagram";

export default class About extends Component {
  render() {
    const Styles = styled.div`
      .jumbo {
        background: url(//res2.weblium.site/res/5bffe2c031d0c50024a38cbe/5c0066a2fc8a790023a88069_optimized_1920)
          no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 250px;
        position: relative;
        z-index: 0;
      }
      .overlay {
        background: linear-gradient(
          89deg,
          rgb(255 255 255 / 67%) 0%,
          rgb(252 96 96 / 70%) 100%
        );
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }
      @media screen and (max-width: 425px) {
        .jumbo{
          height:140px;
        }
      }
      @media screen and (max-width: 375px) {
        .jumbo{
          height:126px;
        }
      }
    `;
    return (
      <>
        <Jumbo />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__heading text-center">
                <h2>- Почему мы? - </h2>
              </div>
            </div>
          </div>
          <div className="row animate__animated animate__fadeInUp animate__delay-1s  ">
            <div className="col-md-6 col-lg-4">
              <div className="why__chose__content mb-80 text-center">
                <div className="chosse__icon">
                  <FontAwesomeIcon icon={faFilm} />
                </div>
                <h4>Высококачественные Качество Изображения</h4>
                <p>
                  Мы с любовью и удовольствием делаем фотографии всех видов под
                  руководством лучших мастеров фотографии. Мы используем только
                  современное и качественное оборудование
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why__chose__content mb-80 text-center">
                <div className="chosse__icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4>Профессионалы своего дела</h4>
                <p>
                  Наша команда состоит только из обученных профессионалов. Мы
                  создадим не передаваемую атмосферу и запечетлим самые красивые
                  моменты вышей жизни.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why__chose__content mb-80 text-center">
                <div className="chosse__icon">
                  <FontAwesomeIcon icon={faCamera} />
                </div>
                <h4>Новейшее оборудование</h4>
                <p>
                  Наша команда использует новейшие фотооборудование для
                  получение самой детализированной и красочной фотографии.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Styles>
          <Jumb
            fluid
            className="jumbo animate__animated animate__fadeInLeftBig animate__delay-1s "
          >
            <div className="overlay">
              <Container>
                <div className="invite_jumArea">
                  <div className="jumbo__area">
                    <h1 className="invite__jumbText">
                      Позвольте нам помочь вам сохранить драгоценные моменты
                      вашей жизни!
                    </h1>
                  </div>
                  <div className="jum__buttonarea">
                    <a href="/Contact">
                      <button className="btn__jumInv">Связаться</button>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </Jumb>
        </Styles>
        <div className="team__area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__heading text-center">
                  <h2>- Наша команда -</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="team__contentArea text-center mb-30 animate__animated animate__fadeInUp animate__delay-1s ">
                  <div className="member__thumb">
                    <img src={Photomember1}></img>
                  </div>
                  <h5>Петунин Илья</h5>
                  <span>Фотограф</span>
                  <p>
                    Фотография-это история, которую я не могу выразить словами
                  </p>
                  <div className="member__social">
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="team__contentArea text-center mb-30 animate__animated animate__fadeInUp animate__delay-1s ">
                  <div className="member__thumb">
                    <img src={Photomember2}></img>
                  </div>
                  <h5>Петунин Илья</h5>
                  <span>Фотограф</span>
                  <p>
                    Фотография – это моя страсть, поиск истины, моя одержимость
                  </p>
                  <div className="member__social">
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="team__contentArea text-center mb-30 animate__animated animate__fadeInUp animate__delay-2s ">
                  <div className="member__thumb">
                    <img src={Photomember3}></img>
                  </div>
                  <h5>Петунин Илья</h5>
                  <span>редактор</span>
                  <p>
                    Фотографировать-значит наслаждаться жизнью, каждую сотую
                    долю секунды
                  </p>
                  <div className="member__social">
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="team__contentArea text-center mb-30 animate__animated animate__fadeInUp animate__delay-2s ">
                  <div className="member__thumb">
                    <img src={Photomember4}></img>
                  </div>
                  <h5>Петунин Илья</h5>
                  <span>Визажист</span>
                  <p>
                    Мы делаем фотографии, чтобы понять, что значит для нас наша
                    жизнь
                  </p>
                  <div className="member__social">
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://vk.com/ipetunin" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-80"></div>
        <Instagram token={process.env.REACT_APP_INS_TOKEN} limit={7} />
        <Footer />
      </>
    );
  }
}

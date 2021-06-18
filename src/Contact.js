import React, { Component } from "react";
import Jumbo from "./components/Jumbotron";
import Footer from "./components/Footer";
import GoogleMap from "./components/Maps";
import Instagram from "./components/Instagram";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Jumbo />
        <div className="container">
          <div className="mgb-70">
            <div className="contact__inner">
              <div className="contact__item">
                <div className="container">
                  <h1> - Контакты -</h1>
                  <h5>
                    Хотите арендовать нашу студию, оборудование или услуги, или
                    вам нужна дополнительная информация от Aliance Studio?
                    Заполните форму, и мы будем на связи!
                  </h5>
                  <div>
                    <div className="contact-list__item ">
                      <div>
                        <h3>Адрес:</h3>
                      </div>
                      <div>
                        <p className="contact-list__infop">
                          {"обл.Владимирская, г.Муром, \n ул.Комсомольская 55"}
                        </p>
                      </div>
                    </div>
                    <div className="contact-list__item ">
                      <div>
                        <h3>Рабочие часы:</h3>
                      </div>
                      <div>
                        <p className="contact-list__infop">
                          {
                            "Понедельник-суббота: 10:00 - 21:00. \n Воскресенье: 10:00 - 17:00."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="contact-list__item ">
                      <div>
                        <h3>Контакты:</h3>
                      </div>
                      <div>
                        <a href="/">
                          <p className="contact-list__infop">
                            +7(929)-028-31-41
                          </p>
                        </a>
                        <a
                          className="contact-mail"
                          href="https://e.mail.ru/compose/"
                          target="_blank"
                        >
                          <p className="contact-list__infop">
                            petunin_i2001@mail.ru
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__feedback">
                  <div className="contact__container">
                    <input
                      className="contact__input"
                      type="text"
                      placeholder="Полное имя"
                    ></input>
                    <input
                      className="contact__input"
                      type="tel"
                      placeholder="Номер телефона"
                    ></input>
                    <input
                      className="contact__input"
                      type="email"
                      placeholder="Email адрес"
                    ></input>
                    <input
                      className="contact__input contact__input_text"
                      type="text"
                      placeholder="Наберите ваше сообщение"
                    ></input>
                    <button className="contact__button">
                      Отправить заявку
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <GoogleMap />
          </div>
        </div>
        <Instagram token={process.env.REACT_APP_INS_TOKEN} limit={7} />
        <Footer />
      </>
    );
  }
}

import React, { Component } from "react";
import Vkontakte from "./image/footer/vk.png";
import Facebook from "./image/footer/facebook.png";
import Telegram from "./image/footer/telegram.png";
import Twitter from "./image/footer/twitter.png";
import Instagram from "./image/footer/instagram.png";
import Logo from "./image/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-area">
        <div className="container">
          <div className="footer-d ">
            <div>
              <a href="/">
                <img className="footer__logo" src={Logo} alt="logo" />
              </a>
            </div>
            <div className="footer__nav__block">
              <a className="footer__nav" href="/Gallery">
                Галерея
              </a>
              <a className="footer__nav" href="/About">
                О нас
              </a>
              <a className="footer__nav" href="/Contact">
                Контакты
              </a>
            </div>
            <div className="number__area">
              <a className="footer__number" href="/">
                +7(929)-028-31-41
              </a>
            </div>
          </div>
        </div>
        <div className="social__info">
          <p className="p__footer">Наши соцсети</p>
          <div>
            <a
              href="https://vk.com/ipetunin"
              target="_blank"
              className="footer__image"
            >
              <img className="footer__image" src={Vkontakte} alt="" />
            </a>
            <a
              href="https://vk.com/ipetunin"
              target="_blank"
              className="footer__image"
            >
              <img className="footer__image" src={Facebook} alt="" href="" />
            </a>
            <a
              href="https://vk.com/ipetunin"
              target="_blank"
              className="footer__image"
            >
              <img className="footer__image" src={Telegram} alt="" href="" />
            </a>
            <a
              href="https://vk.com/ipetunin"
              target="_blank"
              className="footer__image"
            >
              <img className="footer__image" src={Twitter} alt="" href="" />
            </a>
            <a
              href="https://vk.com/ipetunin"
              target="_blank"
              className="footer__image"
            >
              <img className="footer__image" src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

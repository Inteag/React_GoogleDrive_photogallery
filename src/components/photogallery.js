import React, { Component } from "react";
import {Container } from "react-bootstrap";
import "../App.css";
import GetImage from "./getimageHomegallery";
import myimg1 from "./image/MyImage/1.jpg";
import myimg2 from "./image/MyImage/2.jpg";
import myimg3 from "./image/MyImage/3.jpg";
import myimg4 from "./image/MyImage/4.png";
import myimg5 from "./image/MyImage/5.png";
import myimg6 from "./image/MyImage/6.jpeg";


export default class photogallery extends Component {
  render() {
    return (
      <>
      <Container>
        <div className="HomeGallerytext__area">
          <p className="HomeGallerytext">- Наши Услуги -</p>
        </div>
        <div className="ourServices__area animate__animated animate__fadeIn animate__delay-1s ">
          <div className="ourServicesImage__area">
          <img className="" src={myimg1} />
          <span>
            <h3>Место проведения</h3>
            <p>Арендуйте одну из наших полностью оборудованных фотостудий при бронировании мероприятия в нашем пространстве. Каждая из наших студий оснащена новейшими технологиями цифровой фотографии и профессиональными системами освещения. Мы следим за тем, чтобы настройка освещения была правильной и могла создавать наиболее дополняющие снимки. У нас есть широкий выбор полноцветных и живописных фонов по запросу.</p>
            </span>
          </div>
          <div className="ourServicesImage__area">
          <img className="" src={myimg2} />
          <span>
            <h3>Аренда Оборудования</h3>
            <p>Хотите сделать несколько снимков профессионального качества самостоятельно, но у вас нет всего оборудования? Мы предлагаем полный спектр оборудования для фотосъемки и освещения в аренду, включая цифровые камеры и объективы, студийную и портативную вспышку, а также студийное оборудование для захвата. У нас также есть фоны, отражатели, счетчики света и другие аксессуары.</p>
            </span>
          </div>
          <div className="ourServicesImage__area">
          <img className="" src={myimg3} />
          <span>
            <h3>Портретная фотография</h3>
            <p>Независимо от того, нужен ли вам качественный личный портрет, семейный портрет, фотосессия пары или корпоративный снимок головы для вашего бизнес-портфолио, мы вас обеспечим. Мы создаем уникальные и персонализированные портреты, которые будут храниться в вашей семье из поколения в поколение. Все окончательные портреты индивидуально ретушированы, чтобы дополнить ваш внешний вид.</p>
            </span>
          </div>
          <div className="ourServicesImage__area">
          <img className="" src={myimg4} />
          <span>
            <h3>Фотосъемка событий</h3>
            <p>Наши фотографы обеспечат полный день освещения вашего личного или корпоративного мероприятия и позаботятся о том, чтобы запечатлеть идеальные воспоминания, которые останутся на всю жизнь. От свадеб и дней рождения до выпускных вечеров они могут запечатлеть особые моменты, которые вы не хотите забывать. Вскоре после этого все изображения будут доступны в Интернете.</p>
            </span>
          </div>
          <div className="ourServicesImage__area">
          <img className="" src={myimg5} />
          <span>
            <h3>Макияж и причёска</h3>
            <p>Наши профессиональные визажисты и парикмахеры к вашим услугам, чтобы вы чувствовали себя и выглядели наилучшим образом. Расслабьтесь, пока наши эксперты по макияжу творят свою магию, чтобы улучшить ваш внешний вид и индивидуальность. Мы используем широкий спектр популярных и высококлассных брендов косметики. Вы можете остаться с вашим любимым макияжем и прической или позволить нашей команде экспериментировать с новыми цветами, стилями и внешностью.</p>
            </span>
          </div>
          <div className="ourServicesImage__area">
          <img className="" src={myimg6} />
          <span>
            <h3>Постпродакшн-редактирование</h3>
            <p>Наши фотографы позаботятся о том, чтобы вы выглядели наилучшим образом, обеспечив обширное постпродакшн-редактирование изображений на всех ваших изображениях. Мы используем самые передовые методы ретуши и улучшения печати для достижения выдающегося качества изображения.</p>
            </span>
          </div>
        </div>
        <div className="photogallery__button ">
              <a href="/Contact">
                <button className="Gallery__button">Связаться с нами</button>
              </a>
            </div>
        <div className="HomeGallerytext__area">
          <p className="HomeGallerytext">- Наши Работы -</p>
        </div>
        </Container>
        <Container className="center">
          <div className="gallery">
            <div className="photogallery__image ">
              <GetImage token={process.env.REACT_APP_GOOGLE_TOKEN_HOME} />
            </div>
            <div className="photogallery__button ">
              <a href="/Gallery">
                <button className="Gallery__button">Увидеть больше</button>
              </a>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

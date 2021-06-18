import React, { useState, useEffect, useRef, componentDidMount } from "react";
import axios from "axios";
import "./components.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../scss/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faImages, faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const StickySlider = ({ token, ...props }) => {
  const [SlideCoutn, setSlideCount] = useState(6);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    window.innerWidth < 769 ? setSlideCount(3) : setSlideCount(6);
  };

  const [feeds, setFeedsData] = useState([]);
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,username,caption&limit=${props.limit}&access_token=${tokenProp.current}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchInstagramPost();
    return () => {
      abortController.abort();
    };
  }, [props.limit]);
  console.log(feeds);
  return (
    <>
      <div className="instagram__content">
        <div className="container">
          <div className="instagram">
            <h2 className="instagram__textarea">Follow Instagram</h2>
            <p className="instagram__name">@Ilya.petunin</p>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={SlideCoutn}
        autoplay={{ delay: 3000 }}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper mb-80"
      >
        {feeds.map((item, idx) => (
          <div key={idx}>
            <SwiperSlide>
              <div className="single-instagram-item">
                {item.media_type=="IMAGE"?
                <img className=" image_instagram" src={item.media_url}/>:
                item.media_type=="VIDEO"?
              <video src={item.media_url} type="video/mp4" className=" image_instagram" />: <img className=" image_instagram" src={item.media_url}/>}
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                  <i className={"InstagramIcon__group"}>
                    {item.media_type == "CAROUSEL_ALBUM" ? (
                      <FontAwesomeIcon icon={faImages} />
                    ): item.media_type == "VIDEO" ? <FontAwesomeIcon icon={faVideo} />
                    : (
                      <FontAwesomeIcon icon={faImage} />
                    )}
                  </i>
                  <a href={item.permalink} target="_blank">
                    <i className="ti-instagram" aria-hidden="true">
                      <FontAwesomeIcon icon={faInstagram} />
                    </i>
                    <span>{item.username}</span>
                    <p className="instagramCaption">{item.caption}</p>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default StickySlider;

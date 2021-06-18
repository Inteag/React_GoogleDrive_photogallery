import React, { useEffect, useState } from "react";
import * as R from "ramda";
import "../App.css";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
function GetImageViewer({ token }) {
  const [imgIds, setImgIds] = useState([]);
  const [style, setStyle] = useState({});
  const [clickable, setClickable] = useState(false);
  const [classNames, setClassNames] = useState(null);
  const [modal, setModal] = useState(true);
  const [excludes, setExcludes] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const [photoIndex, setPhotoindex] = useState(null);
  let images = [];
  let media_id = [];
  const GOOGLE_API_KEY = "AIzaSyCwaVxat4p4IailIqtY6r_9boljTHFHPBY";
  const GOOGLE_DRIVE_URL_START =
    "https://www.googleapis.com/drive/v2/files?q=%27";
  const GOOGLE_DRIVE_URL_END = "%27+in+parents&key=";
  const GOOGLE_DRIVE_IMG_URL = "http://drive.google.com/uc?export=view&id=";
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    await fetch(
      GOOGLE_DRIVE_URL_START +
        token +
        GOOGLE_DRIVE_URL_END +
        GOOGLE_API_KEY
    )
      .then((response) => response.json())
      .then((jsonResp) => {
        setImgIds(jsonResp.items);
      });
  }
  function checkFormat(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
  const renderImages = (className, id, exclude, item, i) => {
    media_id.unshift(item.id);
    images.unshift(GOOGLE_DRIVE_IMG_URL + item.id); // заполняет массив url изображений
    return (
      <>
        {!exclude && (
          <div className="animate__animated animate__fadeInUp animate__delay-1s ">
            <div className="single-portfolio-content">
              <img
                style={style}
                className={(clickable ? " gd-pointer " : "") + " gd-img "}
                src={GOOGLE_DRIVE_IMG_URL + item.id}
                id={id ? id : null}
                key={i}
                alt={item.title}
              />
              <div className="hover-content">
                <a
                  src={GOOGLE_DRIVE_IMG_URL + item.id}
                  className="portfolio-img"
                  alt={item.title}
                  onClick={() => {
                    {
                      setIsopen(true);
                      setPhotoindex(
                        media_id.findIndex(
                          (currentValue) => currentValue == item.id
                        )
                      );
                    }
                  }}
                >
                  +
                </a>
                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={
                      images[(photoIndex + images.length - 1) % images.length]
                    }
                    onCloseRequest={() => setIsopen(false)}
                    onMovePrevRequest={() =>
                      setPhotoindex(
                        (photoIndex + images.length + 1) % images.length,
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoindex(
                        (photoIndex + images.length - 1) % images.length,
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderMain = (className, id, exclude, href, item, i) => {
    if (!R.isEmpty(href)) {
      return <a href={href}>{renderImages(className, id, exclude, item, i)}</a>;
    }
    return renderImages(className, id, exclude, item, i);
  };

  return (
    <>
      {imgIds &&
        imgIds.map((item, i) => {
          const title = R.propOr("", "title", item);

          if (checkFormat(item.title)) {
            const className = R.propOr("", title, classNames);
            const id = R.propOr("", title);
            const exclude = R.propOr("", title, excludes);
            const href =
              !modal && clickable ? GOOGLE_DRIVE_IMG_URL + item.id : "";
            return renderMain(className, id, exclude, href, item, i);
          }
        })}
    </>
  );
}
export default GetImageViewer;

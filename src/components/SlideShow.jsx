import React, { useState } from "react";
import "../style/SlideShow.css";
import { ReactComponent as ChevronLeft } from "../assets/chevron-left-solid.svg";
import { ReactComponent as ChevronRight } from "../assets/chevron-right-solid.svg";

function SlideShow({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  function goLeft() {
    if (currentPictureIndex > 0) {
      setCurrentPictureIndex(currentPictureIndex - 1);
    } else {
      setCurrentPictureIndex(pictures.length - 1);
    }
  }
  function goRight() {
    if (currentPictureIndex < pictures.length - 1) {
      setCurrentPictureIndex(currentPictureIndex + 1);
    } else {
      setCurrentPictureIndex(0);
    }
  }
  return (
    <section className="slideFormat">
      <div>
        <img
          src={pictures[currentPictureIndex]}
          className="picturesStyle"
          alt=""
        ></img>
      </div>
      <div className="buttonBox">
        {pictures.length > 1 && (
          <button onClick={() => goLeft()} className="button">
            <ChevronLeft fill="#ffffff" className="chevronFormat" />
          </button>
        )}
        {pictures.length > 1 && (
          <button onClick={() => goRight()} className="button">
            <ChevronRight fill="#ffffff" className="chevronFormat" />
          </button>
        )}
      </div>
    </section>
  );
}

export default SlideShow;

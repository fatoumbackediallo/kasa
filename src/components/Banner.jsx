import React from "react";
import "../style/Banner.css";

function Banner({ image, text }) {
  return (
    <div className="bannerContainer">
      <img className="bannerImage" src={image} alt="Banner" />
      <div className="BannerOverlay"></div>
      <p className="textBanner">{text}</p>
    </div>
  );
}

export default Banner;

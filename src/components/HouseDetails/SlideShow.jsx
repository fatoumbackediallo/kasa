import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../style/SlideShow.css";

function SlideShow({ pictures }) {
  return (
    <section>
      <Carousel showIndicators={false}>
        {pictures.map((url, index) => (
          <div key={index} className="slideFormat">
            <img src={url} className="picturesStyle" alt="" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default SlideShow;

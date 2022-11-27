import React from "react";
import starFilled from "../assets/red-star.png";
import starUnfilled from "../assets/neutral-star.png";
import "../style/Stars.css";

function Stars({ rating }) {
  const starFilledArray = Array(rating).fill(1);
  const starUnfilledArray = Array(5 - rating).fill(0);

  return (
    <div className="starsContainer">
      {starFilledArray.map((s, i) => (
        <img
          key={`${s}-${i}`}
          src={starFilled}
          className="starStyle"
          alt="starFilled"
        />
      ))}
      {starUnfilledArray.map((s, i) => (
        <img
          key={`${s}-${i}`}
          src={starUnfilled}
          className="starStyle"
          alt="starUnfilled"
        />
      ))}
    </div>
  );
}

export default Stars;

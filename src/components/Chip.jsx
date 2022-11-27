import React from "react";
import "../style/Chip.css";

function Chip({ tags }) {
  return (
    <div className="tagsContainer">
      <ul className="tagsFormat">
        {tags.map((item, index) => (
          <li className="itemStyle" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chip;

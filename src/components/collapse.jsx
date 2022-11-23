import React from "react";
import { useState, useRef } from "react";
import "../style/Collapse.css";
import { ReactComponent as ChevronDown } from "../assets/chevron-down-solid.svg";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef();
  if (parentRef.current) console.log();

  return (
    <div className="box">
      <button className="buttonTitle" onClick={() => setIsOpen(!isOpen)}>
        {props.label}{" "}
        <ChevronDown
          fill="#ffffff"
          className={"chevronStyle" + (isOpen ? " collapsibleOpen" : "")}
        />
      </button>

      <div
        className="boxParent"
        ref={parentRef}
        style={
          isOpen
            ? { height: parentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="buttonChildren">{props.children}</div>
      </div>
    </div>
  );
}

export default Collapsible;

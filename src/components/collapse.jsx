import React from "react";
import Proptypes from "prop-types";
import { useState } from "react";
import "../style/Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaCircleChevronDown,
  FaCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function Collapsible(props) {
  const [open, setOpen] = useState(false);
  const { title, children } = this.props;

  return (
    <div className="Box">
      <button
        onClick={() => setOpen(!open)}
        aria-controls={children}
        aria-expanded={open}
      ></button>
      <div className="boxTitle">
        <h2>{title}</h2>
        <i className=" chevronStyle">
          {FaCircleChevronDown || FaCircleChevronUp}
        </i>
      </div>
      <div className="collapseBox">
        <div className="boxChildren">{children}</div>
      </div>
    </div>
  );
}

Collapsible.propTypes = { title: Proptypes.string };
export default Collapsible;

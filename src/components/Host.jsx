import React from "react";
import "../style/Host.css";

function Host({ host }) {
  return (
    <div className="hostFormat">
      <p className="hostNameFormat">{host.name}</p>
      <img src={host.picture} className="hostPictureStyle" alt="" />
    </div>
  );
}

export default Host;

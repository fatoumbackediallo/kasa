import React from "react";
import logo from "../assets/logo.png";
import "../style/Footer.css";

function Footer() {
  return (
    <section className="main-footer">
      <div>
        <img src={logo} alt="Kasa" className="logoFooter" />
      </div>
      <div>
        <p className="footerText">© 2020 Kasa. All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;

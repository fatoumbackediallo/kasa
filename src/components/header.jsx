import React from "react";
import "../style/Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div>
        <img src={logo} alt="Kasa" className="logo" />
      </div>
      <nav className="navBar">
        <Link to="/" className="menu_Accueil">
          Accueil
        </Link>
        <Link to="/about" className="menu_Apropos">
          A Propos
        </Link>
      </nav>
    </section>
  );
}

export default Header;

import React from "react";
import "../style/Notfound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <section className="NotFoundContainer">
        <div>
          <h1 className="h1Style">404</h1>
        </div>
        <div>
          <h2 className="h2Format">
            Oups! La page que vous demandez n'existe pas.
          </h2>
        </div>
        <div>
          <Link to="/" className="pStyle">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;

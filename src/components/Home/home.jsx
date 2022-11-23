import React from "react";
import HomeBanner from "../Homebanner";
import logements from "../../data/logements.json";
import "../../style/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <HomeBanner />
      <section className="logementsContainer">
        {logements.map((logement) => (
          <div key={logement.id} className="logementBox">
            {" "}
            <img
              src={logement.cover}
              className="imgStyle"
              alt={logement.title}
            ></img>
            <Link to={"/houseDetails/" + logement.id} className="logementTitle">
              {logement.title}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

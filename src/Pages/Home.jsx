import React from "react";
import Banner from "../components/Banner";
import logements from "../data/logements.json";
import "../style/Home.css";
import { Link } from "react-router-dom";
import HomeImageBanner from "../assets/imgHomeBanner.png";

function Home() {
  return (
    <div>
      <div className="bannerStyle">
        <Banner text="Chez vous, partout et ailleurs" image={HomeImageBanner} />
      </div>
      <section className="logementsContainer">
        {logements.map((logement) => (
          <div key={logement.id} className="logementBox">
            {" "}
            <img
              src={logement.cover}
              className="imgStyle"
              alt={logement.title}
            ></img>
            <div className="logementBoxOverlay"></div>
            <Link
              to={"/house-details/" + logement.id}
              className="logementTitle"
            >
              {logement.title}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

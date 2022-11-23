import React from "react";
import { useParams } from "react-router-dom";
import "../../style/HouseDetails.css";
import SlideShow from "./SlideShow";
import logements from "../../data/logements.json";

function HouseDetails() {
  const { id } = useParams();

  const logement = logements.find((logement) => {
    return logement.id === id;
  });

  return (
    <div>
      <SlideShow pictures={logement.pictures} />
      <h2>{logement.title}</h2>
    </div>
  );
}

export default HouseDetails;

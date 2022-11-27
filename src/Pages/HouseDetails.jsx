import React from "react";
import { useParams } from "react-router-dom";
import "../style/HouseDetails.css";
import SlideShow from "../components/SlideShow";
import logements from "../data/logements.json";
import Collapsible from "../components/Collapse";
import Host from "../components/Host";
import Chip from "../components/Chip";
import Stars from "../components/Stars";
import Notfound from "./Notfound";

function HouseDetails() {
  const { id } = useParams();

  const logement = logements.find((logement) => {
    return logement.id === id;
  });

  return logement ? (
    <main>
      <section>
        <SlideShow pictures={logement.pictures} />
        <div className="logementDetails">
          <div className="logementIndexTagsContainer">
            <div className="logementIndex">
              <h2 className="logementName">{logement.title}</h2>
              <p className="logementLocation">{logement.location}</p>
            </div>
            <div className="logementTags">
              <Chip tags={logement.tags} />
            </div>
          </div>
          <div className="hostStarsContainer">
            <div>
              <Host host={logement.host} />
            </div>
            <div>
              <span>
                <Stars rating={parseInt(logement.rating)} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="detailsContent">
        <div className="collapsibleElementBox">
          <div className="collapsibleElementFormat">
            <Collapsible label="Description">
              <p className="p-CollapsibleElement">
                Vous serez à 50m du canal Saint-martin où vous pourrez
                pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                cœur de Paris avec 5 lignes de métro et de nombreux bus.
                Logement parfait pour les voyageurs en solo et les voyageurs
                d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes
                à pied).
              </p>
            </Collapsible>
          </div>
          <div className="collapsibleElementFormat">
            <Collapsible label="Equipements">
              <p className="p-CollapsibleElement">
                <span className="spanCollapsibleElement">Climatisation</span>
                <span className="spanCollapsibleElement">Wi-Fi</span>
                <span className="spanCollapsibleElement">Cuisine</span>
                <span className="spanCollapsibleElement">
                  Espace de travail
                </span>
                <span className="spanCollapsibleElement">Fer à repasser</span>
                <span className="spanCollapsibleElement">Sèche-cheveux</span>
                <span className="spanCollapsibleElement">Cintres</span>
              </p>
            </Collapsible>
          </div>
        </div>
      </section>
    </main>
  ) : (
    <Notfound />
  );
}

export default HouseDetails;

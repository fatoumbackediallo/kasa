import React from "react";
import "../style/About.css";
import Banner from "../components/Banner";
import Collapsible from "../components/Collapse";
import AboutImageBanner from "../assets/about-banner.png";

function About() {
  return (
    <section>
      <div className="BannerBox">
        <Banner image={AboutImageBanner} />
      </div>
      <div>
        <Collapsible label="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapsible>
      </div>
      <div>
        <Collapsible label="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapsible>
      </div>
      <div>
        <Collapsible label="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapsible>
      </div>
      <div>
        <Collapsible label="Responsabilité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapsible>
      </div>
    </section>
  );
}

export default About;

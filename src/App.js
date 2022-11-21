import React from "react";
import "./style/App.css";

import Routeur from "./components/Routeur";
import Footer from "./components/footer";
import Header from "./components/header";
import "./style/Routeur.css";

function App() {
  return (
    <div>
      <div className="appPageContainer">
        <Header />
        <div className="routerFormat">
          <Routeur />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import NotFound from "./NotFound/404";
import HouseDetails from "./HouseDetails/HouseDetails";

export default function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/houseDetails/:id" element={<HouseDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

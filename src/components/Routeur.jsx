import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/Notfound";
import HouseDetails from "../Pages/HouseDetails";

export default function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/house-details/:id" element={<HouseDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

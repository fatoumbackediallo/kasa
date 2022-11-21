import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import NotFound from "./NotFound/404";




export default function Routeur() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
  )
}


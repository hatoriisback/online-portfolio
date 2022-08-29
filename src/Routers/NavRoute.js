import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import Interest from "../Pages/Interest";
import Awards from "../Pages/Awards";
import Education from "../Pages/Education";


export default function NavRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="education" element={<Education />} />
      <Route path="skills" element={<Skills />} />
      <Route path="interests" element={<Interest />} />
      <Route path="awards" element={<Awards />} />
    </Routes>
  );
}

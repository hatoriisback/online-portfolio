import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  const [navigations] = useState([
    {
      name: "About",
      to: "about",
    },
    {
      name: "Experience",
      to: "experience",
    },
    {
      name: "Education",
      to: "education",
    },
    {
      name: "Skills",
      to: "skills",
    },
    {
      name: "Interests",
      to: "interests",
    },
    {
      name: "Awards",
      to: "awards",
    },
  ]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
      <NavLink className="nav-custom" to="/">
        curriculum vitae
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          {navigations.map((navigation, i) => {
            return (
              <li key={i} className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "#96E5D1" : "",
                    };
                  }}
                  className="nav-link"
                  to={navigation.to}
                >
                  {navigation.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

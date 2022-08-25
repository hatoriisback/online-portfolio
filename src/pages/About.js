import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link className="navbar-title" to="">
        <h1>ABOUT</h1>
      </Link>
      <p>This is About Pages!</p>
      <Link className="navbar-link" to="aboutcompany">
        About Company
      </Link>
      {" || "}
      <Link className="navbar-link" to="aboutme">
        About Me
      </Link>
      <Outlet />
    </div>
  );
}

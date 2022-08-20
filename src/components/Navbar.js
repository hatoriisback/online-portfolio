import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="navbar-link" to="">
        Home
      </Link>
      {" || "}
      <Link className="navbar-link" to="about">
        About
      </Link>
      {" || "}
      <Link className="navbar-link" to="contact">
        Contact
      </Link>
      {" || "}
      <Link className="navbar-link" to="members">
        Members
      </Link>
      {" || "}
      <Link className="navbar-link" to="items">
        Items
      </Link>
    </nav>
  );
}

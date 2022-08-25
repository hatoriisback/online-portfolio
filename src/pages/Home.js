import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link className="navbar-title" to="">
        <h1>HOME</h1>
      </Link>
      <p>This is Home Pages!</p>
    </div>
  );
}

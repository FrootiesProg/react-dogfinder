import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

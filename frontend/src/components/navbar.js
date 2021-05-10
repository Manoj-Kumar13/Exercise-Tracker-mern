import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <h1>Exercise Tracker</h1>
        </Link>
      </div>
      <div className="items"></div>
      <ul>
        <Link to="/">
          <li>Exercises</li>
        </Link>
        <Link to="/create">
          <li>Create New Exercises</li>
        </Link>
        <Link to="/user">
          <li>Create User</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

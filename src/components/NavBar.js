import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaWpforms } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-button">
        <FaHome className="nav-icon" />
        Home
      </NavLink>

      <NavLink to="/about" className="nav-button">
        <FaInfoCircle className="nav-icon" />
        About
      </NavLink>

      <NavLink to="/jobs" className="nav-button">
        <FaBriefcase className="nav-icon" />
        Jobs
      </NavLink>

      <NavLink to="/apply" className="nav-button">
        <FaWpforms className="nav-icon" />
        Apply
      </NavLink>
    </nav>
  );
}

export default NavBar;

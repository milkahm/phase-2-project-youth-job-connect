import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaWpforms, FaPlusCircle } from "react-icons/fa";
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

      <NavLink to="/add-job" className="nav-button add-job-button">
        <FaPlusCircle className="nav-icon" />
        Add Job
      </NavLink>
    </nav>
  );
}

export default NavBar;

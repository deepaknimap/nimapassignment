import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ChatApp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/login">Register</Link>
        </li>
        <li>
          <Link to="/Message">Chat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

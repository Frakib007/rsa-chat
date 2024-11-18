import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Chat App</h1>
      <div className="navbar-links">
        <Link to="/sender">Sender</Link>
        <Link to="/receiver">Receiver</Link>
      </div>
    </nav>
  );
};

export default Navbar;

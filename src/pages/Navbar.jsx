import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const location = useLocation(); // Get the current route location

  return (
    <nav className="navbar">
      <h1>Chat App</h1>
      <div className="navbar-links">
        {/* Show Home link only if on Sender or Receiver page */}
        {(location.pathname === "/sender" || location.pathname === "/receiver") && (
          <Link to="/">Home</Link>
        )}

        {/* Show Sender and Receiver links only if not on Sender or Receiver page */}
        {location.pathname !== "/sender" && location.pathname !== "/receiver" && (
          <>
            <Link to="/sender">Sender</Link>
            <Link to="/receiver">Receiver</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/portfolio" className="nav-link">
            Portfolio
          </a>
        </li>
        
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>

        <li className="nav-item">
          <a href="/resume" className="nav-link">
            Resume
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
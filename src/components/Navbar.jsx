import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          ABIOLA OLAMILEKAN OPEYEMI
        </Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span>☰</span>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/#projects">Work</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/#connect">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

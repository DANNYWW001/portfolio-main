import React, { useState } from "react";
import { Link } from "react-router-dom";

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(
    window.matchMedia(query).matches
  );
  React.useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 639px)");
  const logoText = isSmallScreen
    ? "ABIOLA. O. O"
    : "ABIOLA OLAMILEKAN OPEYEMI";

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          {logoText}
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

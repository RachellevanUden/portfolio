import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Rachelle van Uden</h1>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger">
        ☰
      </button>
      <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" state={{ scrollTo: "photography" }} className="nav-item">Photography</Link>
        <Link to="/" state={{ scrollTo: "video" }} className="nav-item">Video</Link>
        <Link to="/" state={{ scrollTo: "design" }} className="nav-item">Design</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
        Rachelle van Uden
      </Link>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger">
        ☰
      </button>
      <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/photography-overview" className="nav-item">Photography</Link>
        <Link to="/video-overview" className="nav-item">Video</Link>
        <Link to="/design-overview" className="nav-item">Design</Link>
        <Link to="/prototype-overview" className="nav-item">Prototype</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

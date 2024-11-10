import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Socials</p>
      <div className="social-links">
        <a href="https://www.instagram.com/rachellevanuden/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/rachelle-van-uden" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100000200913234" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
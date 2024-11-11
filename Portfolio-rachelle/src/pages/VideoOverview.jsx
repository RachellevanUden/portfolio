// src/pages/VideoOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Overview.css';

function VideoOverview() {
  return (
    <div className="overview-page">
      <div className="title-container">
      <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="overview-title">Video</h2>
      </div>
      
      <p className="overview-message">
        Exciting video are being uploaded soon! Check back soon as the website is still under construction.
      </p>

      {/* Vimeo Link Button */}
      <a 
        href="https://vimeo.com/user64088353" // Replace with your actual Vimeo profile URL
        target="_blank" 
        rel="noopener noreferrer" 
        className="vimeo-button"
      >
        Visit my Vimeo
      </a>
    </div>
  );
}

export default VideoOverview;


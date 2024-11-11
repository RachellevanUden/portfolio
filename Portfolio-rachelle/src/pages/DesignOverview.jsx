// src/pages/DesignOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Overview.css';

function DesignOverview() {
  return (
    <div className="overview-page">
      <div className="title-container">
    <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="overview-title">Design</h2>
      </div>
      
      <p className="overview-message">
        Exciting design projects are being uploaded soon! Check back soon as the website is still under construction.
      </p>
    </div>
  );
}

export default DesignOverview;

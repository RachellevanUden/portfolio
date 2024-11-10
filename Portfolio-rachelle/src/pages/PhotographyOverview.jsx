// src/pages/PhotographyOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './PhotographyOverview.css';

function PhotographyOverview() {
  return (
    <div className="photography-overview">
      <div className="title-container">
        <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="overview-title">Photography</h2>
      </div>
      
      <div className="project-grid">
        <div className="project-item">
          <Link to="/photography/mulattin-famiri">
            <img src="https://via.placeholder.com/300" alt="Mulattin Famiri" className="project-image" />
            <div className="project-text">
              <h3>Mulattin Famiri</h3>
            </div>
          </Link>
        </div>
        <div className="project-item">
          <Link to="/photography/tegenwind">
            <img src="https://via.placeholder.com/300" alt="Tegenwind" className="project-image" />
            <div className="project-text">
              <h3>Tegenwind</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhotographyOverview;

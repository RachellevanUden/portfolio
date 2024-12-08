// src/pages/DesignOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './DesignOverview.css';
import designImages from '../assets/Design/designImages';

function DesignOverview() {
  return (
    <div className="design-overview">
      <div className="title-container">
        <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="overview-title">Design Projects</h2>
      </div>

      <div className="image-gallery">
        {designImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Design Project ${index + 1}`} 
            className="project-image" 
          />
        ))}
      </div>
    </div>
  );
}


export default DesignOverview;

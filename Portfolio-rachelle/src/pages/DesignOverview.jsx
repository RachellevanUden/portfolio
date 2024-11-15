// src/pages/DesignOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Overview.css';
import designImages from '../assets/Design/designImages';

function DesignOverview() {
  return (
    <div className="project-detail">
      <div className="title-container">
        <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="project-title">Design Projects</h2>
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

      <div className="project-3d-link">
        <Link to="/design/3d-project">
          <div className="project-3d-thumbnail">
            <img src={designImages[4]} alt="3D Design Exploration" />
            <h3>3D Design Exploration</h3>
          </div>
        </Link>
      </div>

    </div>
  );
}


export default DesignOverview;

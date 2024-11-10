// src/pages/Tegenwind.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import tegenwindImages from '../assets/Photography/tegenwindImages';
import './Project.css';

function Tegenwind() {
  return (
    <div className="project-detail">
      <div className="title-container">
        <Link to="/photography-overview" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="project-title">Tegenwind</h2>
      </div>
      
      <div className="image-gallery">
        {tegenwindImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Tegenwind ${index + 1}`} 
            className="project-image" 
          />
        ))}
      </div>
    </div>
  );
}

export default Tegenwind;

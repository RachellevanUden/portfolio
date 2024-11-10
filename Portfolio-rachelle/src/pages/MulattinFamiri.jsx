// src/pages/MulattinFamiri.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import mulattinFamiriImages from '../assets/Photography/mulattinFamiriImages';
import './Project.css';

function MulattinFamiri() {
  return (
    <div className="project-detail">
      <div className="title-container">
        <Link to="/photography-overview" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="project-title">Mulattin Famiri</h2>
      </div>

      <div className="image-gallery">
        {mulattinFamiriImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Mulattin Famiri ${index + 1}`} 
            className="project-image" 
          />
        ))}
      </div>
    </div>
  );
}


export default MulattinFamiri;

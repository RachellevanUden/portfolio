// src/pages/PhotorealisticRender.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import prototypeImages from '../assets/Prototype/prototypeImages';
import './Project.css';

function PhotorealisticRender() {
  return (
    <div className="project-detail">
      <div className="title-container">
        <Link to="/prototype-overview" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="project-title">Photorealistic productrender</h2>
      </div>

      <div className="photorealistic-gallery">
        {prototypeImages.map((image, index) => (
          <div key={index} className="image-container">
            <img 
              src={image.src} 
              alt={`Photorealistic render ${index + 1}`} 
              className="project-image" 
            />
            <p className="image-caption">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotorealisticRender;

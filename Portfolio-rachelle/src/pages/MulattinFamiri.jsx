// src/pages/MulattinFamiri.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
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
      
      <p>
        Description of the Mulattin Famiri project.</p>
      <img src="https://via.placeholder.com/600" alt="Mulattin Famiri Project" className="project-image" />
    </div>
  );
}

export default MulattinFamiri;

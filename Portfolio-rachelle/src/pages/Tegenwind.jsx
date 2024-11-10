// src/pages/Tegenwind.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
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
      
      <p>
        Description of the Tegenwind project goes here. Include any unique details or insights that make this project special.
      </p>
      <img src="https://via.placeholder.com/600" alt="Tegenwind Project" className="project-image" />
    </div>
  );
}

export default Tegenwind;

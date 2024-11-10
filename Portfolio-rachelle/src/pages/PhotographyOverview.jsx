import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import mulattinFamiriImages from '../assets/Photography/mulattinFamiriImages';
import tegenwindImages from '../assets/Photography/tegenwindImages';
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
            <img src={mulattinFamiriImages[25]} alt="Mulattin Famiri" />
            <h3>Mulattin Famiri</h3>
          </Link>
        </div>
        <div className="project-item">
          <Link to="/photography/tegenwind">
            <img src={tegenwindImages[4]} alt="Tegenwind" />
            <h3>Tegenwind</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhotographyOverview;

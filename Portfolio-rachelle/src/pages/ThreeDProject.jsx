import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Project.css';

function ThreeDProject() {
  return (
    <div className="project-detail">
      <div className="title-container">
        <Link to="/design-overview" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="project-title">3D Design Exploration</h2>
      </div>
      <p>3D design project testing.</p>
      {/* Three.js canvas */}
    </div>
  );
}

export default ThreeDProject;

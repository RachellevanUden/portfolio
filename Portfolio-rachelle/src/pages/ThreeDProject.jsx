import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../pages/ThreeDProject.css';
import { initializeThreeJS } from '../utils/threeDSetup';


function ThreeDProject() {
  useEffect(() => {
    initializeThreeJS('bg');

  }, [])
  
  return (
    <div className="project-detail">
      <div className="title-container">
        <Link to="/design-overview" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="project-title">3D Design Exploration</h2>
      </div>
      <p>3D design project testing.</p>

      <canvas id="bg"></canvas>

    
    </div>
  );
}

export default ThreeDProject;

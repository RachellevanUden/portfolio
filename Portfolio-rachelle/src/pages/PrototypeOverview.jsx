import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import prototypeImages from '../assets/Prototype/prototypeImages';
import ThreeJsExperimentImage from '/Rachelle_van_Uden_ThreeJsExperiment_Space.jpg';
import AppleStoryImage from "../assets/Prototype/Rachelle_van_Uden_Storytelling-Threejs.jpg"
import './PrototypeOverview.css';

function PrototypeOverview() {
  return (
    <div className="prototype-overview">
      <div className="title-container">
        <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2 className="overview-title">Prototypes</h2>
      </div>      
      <div className="project-grid">
        <div className="project-item">
          <Link to="/prototype/photorealistic-render">
            <img src={prototypeImages[5].src} alt="Prototype 2" />
            <h3>Photorealistic productrender</h3>
          </Link>
        </div>
        <div className="project-item">
          <Link to="/prototype/threejs-experiment">
            <img src={ThreeJsExperimentImage} alt="Prototype 3" />
            <h3>Three.js experiment</h3>
          </Link>
        </div>
        <div className="project-item">
          <Link to="/prototype/storytelling-apple">
            <img src={AppleStoryImage} alt="Prototype 4" />
            <h3>Storytelling with Three.js</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrototypeOverview;

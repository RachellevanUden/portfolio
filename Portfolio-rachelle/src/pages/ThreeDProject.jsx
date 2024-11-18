import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../pages/ThreeDProject.css';
import { initializeThreeJS } from '../utils/threeDSetup';


function ThreeDProject() {
  useEffect(() => {
    initializeThreeJS('bg');

    // Scroll animatie
    const moveCamera = () => {
      const t = document.body.getBoundingClientRect().top;

      const moon = document.querySelector('#moon'); 
      const raavu = document.querySelector('#raavu'); 

      if (moon) {
        moon.rotation.x += 0.05;
        moon.rotation.y += 0.075;
        moon.rotation.z += 0.05;
      }

      if (raavu) {
        raavu.rotation.y += 0.01;
        raavu.rotation.z += 0.01;
      }

      const camera = document.querySelector('#camera');
      if (camera) {
        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.position.y = t * -0.0002;
      }
    };

    // scroll-eventlistener
    window.addEventListener('scroll', moveCamera);

    return () => {
      window.removeEventListener('scroll', moveCamera);
    };
  }, []);
  
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

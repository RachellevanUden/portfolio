import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../pages/ThreeJsExperiment.css';
import { initializeThreeJS, loadOBJModel } from '../utils/threeJsSetup';

function ThreeJsExperiment() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    useEffect(() => {
      const { scene, camera, moon, raavu } = initializeThreeJS('bg');
  
      if (selectedFile) {
        const fileURL = URL.createObjectURL(selectedFile);
        loadOBJModel(fileURL, scene);
      }
  
      // Scroll animatie
      const moveCamera = () => {
        const t = document.body.getBoundingClientRect().top;
  
        moon.rotation.x += 0.05;
        moon.rotation.y += 0.075;
        moon.rotation.z += 0.05;
  
        raavu.rotation.y += 0.01;
        raavu.rotation.z += 0.01;
  
        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.position.y = t * -0.0002;
      };
  
      // Scroll-eventlistener
      window.addEventListener('scroll', moveCamera);
  
      return () => {
        window.removeEventListener('scroll', moveCamera);
        URL.revokeObjectURL(selectedFile);
      };
    }, [selectedFile]);
  
    // Functie om bestand te selecteren
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file); 
        console.log('Geselecteerd bestand:', file);
      }
    };
  
    // Functie om bestand te uploaden
    const handleFileUpload = () => {
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          console.log('Bestandsinhoud:', event.target.result);
        };
        reader.readAsText(selectedFile);
      } else {
        console.error('Geen bestand geselecteerd');
      }
    };
  
    return (
      <div className="threejs-experiment-detail">
        <div className="title-container">
          <Link to="/prototype-overview" className="back-button">
            <FaArrowLeft />
          </Link>
          <h2 className="project-title">Three.js Experiment</h2>
        </div>
  
        {/* Canvas */}
        <canvas id="bg"></canvas>
  
        {/* Upload sectie */}
        <div className="upload-container">
          <input type="file" accept=".obj" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Upload a 3D Model (OBJ)</button>
        </div>
  
        Tekst
        <main>
          <header>
            <h1>Rachelle van Uden</h1>
            <p>🚀 Welcome to my experiment! </p>
          </header>
  
          <blockquote>
            <p>I played around with React, Vite and Three.js in this project.</p>
          </blockquote>
  
          <section>
            <h2>📜 Research</h2>
            <p>
            Over the course of two weeks, I tackled a long-overdue assignment and made significant progress on my Expert Lab project. I also relaunched my portfolio website, this time building it entirely from scratch using HTML, CSS, JavaScript, React, Vite, and Three.js. You can explore it at www.rachellevanuden.nl ( right here ;) )  to view my previous projects and see what I'm currently working on. <br/> <br/>~Try clicking that yellow ball by the way!~<br/><br/>
            While the project not completely bug free, I chose to make it live so anyone interested can follow along and witness my ongoing skill development. I started with a mobile-first approach and drew on my prior experience with React and Vite to establish a strong foundation. From there, I introduced advanced features like interactive elements and support for uploading 3D models, further enhancing the functionality and depth of my portfolio.
            </p>
  
          </section>
  
          <section className="light">

          <h2>🔧 Problems and fixes</h2>
            <p>
            One of the first problems I encountered was getting an image to display correctly as a background in the 3D scene. Initially, the image path didn't work because I had placed the file in the src/assets folder. After some research, I assumed that Three.js could only handle correct paths if the files were located in the public folder. By moving the image there and changing the path to /space.jpg, I was able to temporarily solve the issue. However, I later discovered what the right path was, rookie mistake. 
            </p><br/>
            <h2>👩🏽‍🚀 Textures on 3D Objects</h2>
            <p>            
            The next issue arose when I tried to add a texture to an object—the moon. Although the texture was successfully loaded, it appeared invisible in the scene. I eventually discovered that this was due to insufficient lighting. By adding a stronger PointLight and increasing its intensity to something higher, the texture became clearly visible. In addition, I adjusted the position of the light source to better illuminate the object.
            </p>
            <br/>
            <h2>🔄 Refresh Issues</h2>
            <p>
            While coding, I noticed that when I saved changes in Visual Studio Code, the textures sometimes wouldn't appear on the live localhost page. After refreshing the page, the textures would display correctly again. I discovered this was a caching issue in the development environment, likely caused by Vite, and that it could be resolved by refreshing the page after making changes.
            </p>
          </section>
  
          <blockquote>
            <p>The yellow ball was just <br />a little interaction test! </p>
          </blockquote>
  
          <section className="left">
            <h2>🏆 Next Steps</h2>
  
            <p>
            While I'm pleased with what I've achieved so far, there are a few improvements I'd like to implement in the future. Admittedly, it currently looks like a bit of a messy collection of elements, but at least it all works, and that was my main priority.
            </p>
            <p>
            <br />First, I'd like to integrate a simple version of the 3D functionality into my live portfolio website for projects that have associated 3D models. This would involve optimizing the 3D page and ensuring it visually fits with the rest of my portfolio.
            </p>
            <p>
            <br />In addition, I'd like to add more interactive elements to the 3D scene. For example, implementing a click-and-drag feature would let users view the model from any angle. This kind of functionality would not only make the scene more engaging but also more informative.
            </p>
            <p>
            <br />Finally, I'm considering animations. Automatically rotating objects or adding subtle motions could make the experience more dynamic. This could be applied, for instance, as a hover effect when users browse my design page.
            </p>
          </section>
  
          <blockquote>
            <p>Thanks for checking it out!</p>
          </blockquote>
        </main>
      </div>
    );
  }
  
  export default ThreeJsExperiment;
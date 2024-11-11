import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import PhotographyOverview from './pages/PhotographyOverview';
import MulattinFamiri from './pages/MulattinFamiri';
import Tegenwind from './pages/Tegenwind';
import VideoOverview from './pages/VideoOverview';
import DesignOverview from './pages/DesignOverview';
import thumbnailImagePhoto from './assets/Photography/Rachelle_van_Uden_Tegenwind-05.jpg';
import thumbnailImageVideo from './assets/Video/Rachelle_van_Uden_EOTS.jpg';
import thumbnailImageDesign from './assets/Design/Rachelle_van_Uden_Nostalgia.png';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <section className="construction-message">
        <p>Welcome, I'm Rachelle! This website is still under construction, but feel free to take a look around and explore my work.</p>
      </section>
      
      <div className="media-tiles">
        <section id="photography" className="section">
          <Link to="/photography-overview">
            <img src={thumbnailImagePhoto} alt="Photography Overview" className="thumbnail-image-h" />
          </Link>
          <div className="media-text">
            <h2>Photography</h2>
            <p>Explore my portrait photography, capturing the essence of individual identities shaped by culture and personality.</p>
          </div>
        </section>

        <section id="video" className="section">
          <Link to="/video-overview">
            <img src={thumbnailImageVideo} alt="Video Overview" className="thumbnail-image-v" />
          </Link>
          <div className="media-text">
            <h2>Video</h2>
            <p>A collection of my video projects, including film, motion graphics, and 3D animations.</p>
          </div>
        </section>

        <section id="design" className="section">
          <Link to="/design-overview">
            <img src={thumbnailImageDesign} alt="Design Overview" className="thumbnail-image" />
          </Link>
          <div className="media-text">
            <h2>Design</h2>
            <p>Browse my design work, from graphic design to 3D modeling.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-wrapper"> 
        <Navbar />
        <div className="content-wrapper"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photography-overview" element={<PhotographyOverview />} />
            <Route path="/photography/mulattin-famiri" element={<MulattinFamiri />} />
            <Route path="/photography/tegenwind" element={<Tegenwind />} />
            <Route path="/video-overview" element={<VideoOverview />} />
            <Route path="/design-overview" element={<DesignOverview />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

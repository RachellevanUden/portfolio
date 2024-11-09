import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

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
      <section id="photography" className="section-first">
        <img src="https://via.placeholder.com/300" alt="Photography placeholder" style={{ marginTop: '1rem' }} />
        <h2>Photography</h2>
        <p>Through portrait photography, I capture each subject's unique identity, shaped by culture and personality.</p>
      </section>
      <section id="video" className="section">
        <img src="https://via.placeholder.com/300" alt="Video placeholder" style={{ marginTop: '1rem' }} />
        <h2>Video</h2>
        <p>A collection of my video projects, including film, motion graphics, and 3D animations.</p>
      </section>
      <section id="design" className="section">
        <img src="https://via.placeholder.com/300" alt="Design placeholder" style={{ marginTop: '1rem' }} />
        <h2>Design</h2>
        <p>Browse my design work, from graphic design to 3D modeling.</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
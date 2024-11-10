import React from 'react';
import myPhoto from '../assets/Rachelle_van_Uden_ABOUT.jpg';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
            <p>
              Hi! I'm Rachelle van Uden, a multimedia artist and designer from 's-Hertogenbosch, The Netherlands. Growing up between the Dutch and Surinamese cultures shaped how I see the world, and I bring that unique perspective to my work in photography, 3D art, design, motion graphics, and web development.
            </p>
            <p>
              I'm all about the details—whether I'm adjusting colors, framing a shot, or fine-tuning a design. I love perfecting the small things that bring a project together, and I believe that less is often more. My style is clean and honest, aiming to let the work speak for itself.
            </p>
            <p>
              When I'm not working, I'm probably traveling or finding new ways to get inspired. Thanks for visiting my portfolio—I hope you enjoy exploring my work!
            </p>
        </div>
        <img src={myPhoto} alt="Rachelle van Uden" className="about-photo" />
      </div>
    </div>
  );
}

export default About;
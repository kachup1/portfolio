import AOS from 'aos'
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header'; 
import './App.css';
import star from './assets/images/silver-star.png';
import AnimatedBackground from "./components/AnimatedBackground";


function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // allow animation each time
  });

  const handleScroll = () => {
    AOS.refresh(); //force AOS to recheck which elements should animate
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <>
      <Header /> 
      <div className="overlay-container">
        <div className="overlay-box">
          
          {/*<AnimatedBackground /> */}
          <About />
          <Skills />
          <Projects />
          <Contact />

        </div>

      </div>
    </>
  );
}



export default App;

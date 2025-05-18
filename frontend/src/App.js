import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header'; 
import './App.css';
import star from './assets/images/silver-star.png';
import AnimatedBackground from "./components/AnimatedBackground";


function App() {
  return (
    <>
      <Header /> 
      <div className="overlay-container">
        <div className="overlay-box">
          
          <AnimatedBackground />
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

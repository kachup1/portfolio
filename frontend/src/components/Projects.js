import React, { useState } from 'react';
import './Projects.css';
import arrow from '../assets/images/arrowOutward.svg';
import rentersGrid1 from '../assets/images/rentersGrid1.JPG';
import rentersGrid2 from '../assets/images/rentersGrid2.JPG';
import rentersGrid3 from '../assets/images/rentersGrid3.JPG';
import kiwibot1 from '../assets/images/kiwibot1.png';
import kiwibot2 from '../assets/images/kiwibot2.jpg';
import kiwibot3 from '../assets/images/kiwibot3.jpg';
import portfolio from '../assets/images/website-landing.JPG';
import carqos1 from '../assets/images/carqos1.JPG';
import carqos2 from '../assets/images/carqos2.JPG';
import carqos3 from '../assets/images/carqos3.JPG';

function Projects(){
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="projects" data-aos="fade-up">
            <div className="projects-string">Projects.</div>

            <div className="project-container">
                <div className="vertical-rectangle"></div>
                
                <div className="project-content">
                    <div className="project-header">
                        <h2 className="project-title">Renters Grid</h2>
                        <h3 className="project-dates">Jan 2024 - Dec 2024</h3>
                    </div>
                    <p className="paragraph"> RentersGrid helps renters share honest reviews about landlords and rental experiences, making it easier for others to find reliable places to live. It's all about creating more transparency in the renting process.</p>
                    
                    <div className="links-content">

                        <a href="https://github.com/kachup1/RentersGrid" className="link-1" target="_blank" rel="noopener noreferrer">
                            <h3>
                                Learn more <img src={arrow} alt="arrow" />
                            </h3>
                        </a>

                        <a href="https://www.youtube.com/watch?v=fzw_6WwKZ3Q&feature=youtu.be" className="link-2" target="_blank" rel="noopener noreferrer">
                            <h3>
                                View demo <img src={arrow} alt="arrow" />
                            </h3>
                        </a>
                        <a href="https://www.figma.com/proto/c3NpliwHroUO4iI9sx4EPQ/High-Fidelity-Design?node-id=3-2&t=dHkVjL4Xxx7QRPGL-1" className="link-2" target="_blank" rel="noopener noreferrer">
                            <h3>
                                View figma prototype<img src={arrow} alt="arrow" />
                            </h3>
                        </a>
                    </div>

                    <div className="image-container">
                    {[rentersGrid1, rentersGrid2, rentersGrid3].map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`rentersGrid${index + 1}`}
                        className={expandedIndex === index ? "project-image expanded" : "project-image"}
                        onClick={() => toggleExpand(index)}
                        />
                    ))}
                    </div>



                    <div className="horizontal-line"></div>


                    <div className="project-header">
                        <h2 className="project-title">Kiwibot</h2>
                        <h3 className="project-dates">Oct 2024</h3>
                    </div>
                    <p className="paragraph"> Kiwibot helps you hit your daily protein goals by generating personalized recipes based on the ingredients you already have. Just tell it your protein target, and it does the rest.</p>
                    
                    <div className="links-content">

                        <a href="https://github.com/kachup1/KiwiBot" className="link-1" target="_blank" rel="noopener noreferrer">
                            <h3>
                                Learn more <img src={arrow} alt="arrow" />
                            </h3>
                        </a>
                    </div>

                    <div className="image-container">
                    {[kiwibot1, kiwibot2, kiwibot3].map((image, index) => (
                        <img
                        key={index + 3}
                        src={image}
                        alt={`kiwibot${index + 1}`}
                        className={expandedIndex === index + 3 ? "project-image expanded" : "project-image"}
                        onClick={() => toggleExpand(index + 3)}
                        />

                    ))}
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="project-header">
                        <h2 className="project-title">Portfolio Website</h2>
                        <h3 className="project-dates">May 2025</h3>
                    </div>
                        <p className="paragraph">
                            A full stack portfolio site to showcase my development work and design style. Built using React, Flask, and AOS with scroll animations, contact form validation, and secure email integration. Deployed via Vercel (frontend) and Render (backend).
                        </p>

                        <div className="links-content">
                            <a href="https://github.com/kachup1/portfolio" target="_blank" className="link-1">
                                <h3>View source <img src={arrow} alt="arrow" /></h3>
                            </a>
                             <a href="https://www.figma.com/proto/jB6mbOxMc4NDdTo7ch3ffA/Personal-Website?node-id=0-1&t=dHkVjL4Xxx7QRPGL-1" target="_blank" className="link-1">
                                <h3>View figma prototype <img src={arrow} alt="arrow" /></h3>
                            </a>                           
                        </div>
                    <div className="image-container">
                            <img
                                src={portfolio}
                                alt="portfolio"
                                className={expandedIndex === 6 ? "project-image expanded" : "project-image"}
                                onClick={() => toggleExpand(6)}
                            />
                            </div>

                    <div className="horizontal-line"></div>

                    <div className="project-header">
                        <h2 className="project-title">Carqos</h2>
                        <h3 className="project-dates">Mar 2025 - Current</h3>
                    </div>
                    <p className="paragraph">   Currently in development - A full stack web app that helps users compare average car maintenance prices by location and service type. Users can also submit quotes to crowdsource data and reduce overpaying.</p>
                    
                    <div className="links-content">

                        <a href="https://github.com/veenx0704/carqos" className="link-1" target="_blank" rel="noopener noreferrer">
                            <h3>
                                Learn more <img src={arrow} alt="arrow" />
                            </h3>
                        </a>
                    </div>

                    <div className="image-container">
                    {[carqos1, carqos2, carqos3].map((image, index) => (
                        <img
                        key={index + 3}
                        src={image}
                        alt={`carqos${index + 1}`}
                        className={expandedIndex === index + 3 ? "project-image expanded" : "project-image"}
                        onClick={() => toggleExpand(index + 3)}
                        />

                    ))}
                    </div>

                    <div className="horizontal-line"></div>

                </div>

            </div>
        </section>

    );
}
export default Projects; 
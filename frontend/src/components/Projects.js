import './Projects.css';
import arrow from '../assets/images/arrowOutward.svg';
import rentersGrid1 from '../assets/images/rentersGrid1.JPG';
import rentersGrid2 from '../assets/images/rentersGrid2.JPG';
import rentersGrid3 from '../assets/images/rentersGrid3.JPG';
import kiwibot1 from '../assets/images/kiwibot1.png';
import kiwibot2 from '../assets/images/kiwibot2.jpg';
import kiwibot3 from '../assets/images/kiwibot3.jpg';

function Projects(){
    return (
        <section id="projects">
            <div className="projects-string">Projects.</div>

            <div className="project-container">
                <div className="vertical-rectangle"></div>
                
                <div className="project-content">
                    <div className="project-header">
                        <h2 className="project-title">Renters Grid</h2>
                        <h3 className="project-dates">Jan 2024 - Dec 2024</h3>
                    </div>
                    <p className="paragraph"> Words words.Words words.Words words.Words words.Words words.Words words.Words words.Words words.</p>
                    
                    <div className="links-content">
                        <h3 className="link-1">Learn more<img src={arrow} alt="arrow" /></h3>
                        <h3 className="link-2">View demo<img src={arrow} alt="arrow" /></h3>
                    </div>

                    <div className="image-container">  
                        <img src={rentersGrid1} alt="rentersGrid1" />
                        <img src={rentersGrid2} alt="rentersGrid2" />
                        <img src={rentersGrid3} alt="rentersGrid3" />

                    </div>

                    <div className="horizontal-line"></div>


                    <div className="project-header">
                        <h2 className="project-title">Kiwibot</h2>
                        <h3 className="project-dates">Oct 2024</h3>
                    </div>
                    <p className="paragraph"> Words words.Words words.Words words.Words words.Words words.Words words.Words words.Words words.</p>
                    
                    <div className="links-content">
                        <h3 className="link-1">Learn more<img src={arrow} alt="arrow" /></h3>
                    </div>

                    <div className="image-container">  
                        <img src={kiwibot1} alt="kiwibot1" />
                        <img src={kiwibot2} alt="kiwibot2" />
                        <img src={kiwibot3} alt="kiwibot3" />

                    </div>
                    
                    <div className="horizontal-line"></div>

                </div>

            </div>
            
        </section>

    );
}
export default Projects; 
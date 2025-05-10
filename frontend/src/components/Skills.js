import './Skills.css';
import html from '../assets/images/html.svg';
import css from '../assets/images/css.png';
import javascript from '../assets/images/js.png';
import react from '../assets/images/react.png';
import mongo from '../assets/images/mongo.png';
import git from '../assets/images/git.png';

function Skills() {
  return (
    <section id="skills">
        <div className="skills-header">
            <h1 className="skill-string">Skills.</h1>

        </div>
        <div className="skills-list">

            <div className="skill-item">
                <h1>HTML</h1>
                <img src={html} alt="HTML" />
            </div>
            <div className="skill-item">
                <h1>CSS</h1>
                <img src={css} alt="CSS" />
            </div>
            <div className="skill-item">
                <h1>JavaScript</h1>
                <img src={javascript} alt="JavaScript" />
            </div>
            <div className="skill-item">
                <h1>React</h1>
                <img src={react} alt="React" />
            </div>
            <div className="skill-item">
                <h1>MongoDB</h1>
                <img src={mongo} alt="MongoDB" />
            </div>
            <div className="skill-item">
                <h1>Git</h1>
                <img src={git} alt="Git" />
            </div>

        </div>

    </section>
  );
}

export default Skills; 

import './About.css';
import star from '../assets/images/silver-star.png';


function About() {
  return (
    <section id="about">
        <div className="star-container">
        <h1 className="hello">Hello.</h1>
            <h1 className="my-name">
            I'm Karla
            <div className="star-container">
                <img src={star} alt="star" className="star-icon1" />
                <img src={star} alt="star" className="star-icon2" />
                <p className="title-text">Full stack software developer</p>
                <div className="title-line"></div>
            </div>
            </h1>
        </div>

    </section>
  );
}
export default About;

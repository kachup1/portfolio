import './Contact.css';
import github from '../assets/images/github_logo.png';
import linkedin from '../assets/images/LinkedIn_icon.png';


function Contact() {
    return (
        <section id="contact">
            <h1 className="contact-string">Contact.</h1>

            <div className="contact-form-container">

                <div className="name-container">
                    <h3 className="name-string">NAME:</h3>
                    <div className="name-text-box">
                          <input type="text" placeholder="Enter your name" className="input-box" />
                    </div>
                </div>

                <div className="email-container">
                    <h3 className="email-string">EMAIL:</h3>
                    <div className="email-text-box">
                          <input type="text" placeholder="Enter email" className="input-box" />
                    </div>
                </div>

                <div className="message-container">
                    <h3 className="message-string">MESSAGE:</h3>
                    <div className="message-text-box">
                        <textarea placeholder="Write your message..." className="input-box2"></textarea>
                    </div>
                </div>
                <div className="button-container">

                    <button type="button" className="submit-button">Submit</button>

                </div>

            </div>

            <div className="contact-logos-container">
                <div className="skill-item2">
                    
                    <a href="https://github.com/kachup1" className="link-1" target="_blank" rel="noopener noreferrer">
                        <h3>
                            <img src={github} alt="Github" />
                        </h3>
                    </a>

                    <a href="https://linkedin.com/in/karla-chuprinski" className="link-1" target="_blank" rel="noopener noreferrer">
                        <h3>
                           <img src={linkedin} alt="Linkedin" />
                        </h3>
                    </a>
                    
                </div>
            </div>
        </section>

    );
}
export default Contact; 
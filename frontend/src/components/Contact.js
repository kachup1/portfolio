import './Contact.css';
import { useState, useRef } from 'react';
import github from '../assets/images/github_logo.png';
import linkedin from '../assets/images/LinkedIn_icon.png';
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [botField, setBotField] = useState('');
    const recaptchaRef = useRef() ;
    const [isSubmitting, setIsSubmitting] = useState(false);


const handleSubmit = async () => {
    if (!name || !email || !message) {
        setStatusMessage("*All fields must be filled.");
        setStatusType("error");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        setStatusMessage("*Please enter a valid email address.");
        setStatusType("error");
        return;
    }

    if (message.length < 10) {
        setStatusMessage("*Message must be at least 10 characters.");
        setStatusType("error");
        return;
    }
    setIsSubmitting(true);
    try {
        const token = await recaptchaRef.current.executeAsync();
        console.log("reCAPTCHA token:", token);
        if (!token) throw new Error("No token received from reCAPTCHA");

        recaptchaRef.current.reset();

        // Proceed with fetch...
    } catch (err) {
        console.error("reCAPTCHA error:", err);
        setStatusMessage("Failed to verify reCAPTCHA. Try again.");
        setStatusType("error");
        return;
    }

    try {
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset(); // Optional: resets for future use

        const response = await fetch("https://portfolio-l420.onrender.com/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message, captchaToken: token, botField: '' }),
        });

        const data = await response.json();

        if (response.ok) {
            setStatusMessage("Message sent successfully!");
            setStatusType("success");
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatusMessage("Failed to send message: " + data.error);
            setStatusType("error");
        }
    } catch (err) {
        setStatusMessage("An error occurred: " + err.message);
        setStatusType("error");
        } finally {
        setIsSubmitting(false);
    }
};


    return (
        <section id="contact" data-aos="fade-right">
            <h1 className="contact-string">Contact.</h1>

            <div className="contact-form-container">

                <div className="name-container">
                    <h3 className="name-string">NAME:</h3>
                    <div className="name-text-box">
                          <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className="input-box" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                    </div>
                </div>

                <div className="email-container">
                    <h3 className="email-string">EMAIL:</h3>
                    <div className="email-text-box">
                          <input 
                            type="text" 
                            placeholder="Enter email" 
                            className="input-box" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                    </div>
                </div>

                <div className="message-container">
                    <h3 className="message-string">MESSAGE:</h3>
                    <div className="message-text-box">
                        <textarea 
                            placeholder="Write your message..." 
                            className="input-box2"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <input
                    type="text"
                    name="botField"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    style={{ display: 'none' }}
                />

                <div className="recaptcha-wrapper">
                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    size="invisible"
                    ref={recaptchaRef}
                    badge="inline"
                />

                </div>

                <div className="button-container">

                    <button
                        type="button"
                        className="submit-button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                    {statusMessage && (
                        <div className={`status-message ${statusType}`}>
                            {statusMessage}
                        </div>
                    )}

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
import './Contact.css';

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

            </div>
        </section>

    );
}
export default Contact; 
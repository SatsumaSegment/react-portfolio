import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-text">Feel free to contact me via social media or using the contact form below</p>
            <div className="contact-main">
                <div className="socials">socials</div>
                <div className="contact-form-container">
                    <form className="contact-form" method="POST">
                        <div className="group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-input" />
                        </div>
                        <div className="group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" aria-describedby="emailHelp" className="form-input" />
                        </div>
                        <div className="group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-input" rows={10}></textarea>
                        </div>
                        <button className="form-button">Send</button>
                    </form>
                </div>
            </div>
            <div className="resume">
                <a href="">My Résumé</a>
            </div>
        </div>
    );
}

export default Contact;

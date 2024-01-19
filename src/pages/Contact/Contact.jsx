import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm("service_bhqx3qy", "template_rojsk3j", e.target, "G9Gh7gZqPRSLA7U8y").then(
            (result) => {
                setStateMessage("Message sent!");
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            },
            (error) => {
                setStateMessage("Something went wrong, please try again later");
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            }
        );

        // Clears the form after sending the email
        e.target.reset();
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-text">Feel free to contact me via social media or using the contact form below</p>
            <div className="contact-main">
                <div className="socials">socials</div>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="group">
                            <label htmlFor="from_name">Name</label>
                            <input type="text" name="from_name" id="from_name" className="form-input" />
                        </div>
                        <div className="group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" aria-describedby="emailHelp" name="email" id="email" className="form-input" />
                        </div>
                        <div className="group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-input" name="message" id="message" rows={10}></textarea>
                        </div>
                        <input className="contact-button" type="submit" value="Send" disabled={isSubmitting} />
                        {stateMessage && <p>{stateMessage}</p>}
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

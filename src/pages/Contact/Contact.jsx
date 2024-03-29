import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();

        // Validate user's input
        if (e.target[0].value === "") {
            setStateMessage("Please provide a valid name");
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
            return;
        }

        if (e.target[1].value === "") {
            setStateMessage("Please provide a valid email address");
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
            return;
        }

        if (e.target[2].value === "") {
            setStateMessage("Please enter a message");
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
            return;
        }

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
                <div className="socials">
                    <h3>Social Media</h3>
                    <div className="social-links-container">
                        <a href="https://www.linkedin.com/in/greg-duke-b87573247/" target="_blank">
                            <img src="/images/linkedin.svg" alt="" className="social-link"></img>
                        </a>
                        <a href="https://github.com/SatsumaSegment" target="_blank">
                            <img src="/images/github.svg" alt="" className="social-link"></img>
                        </a>
                    </div>
                </div>
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
        </div>
    );
}

export default Contact;

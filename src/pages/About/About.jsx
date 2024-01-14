// Import modules
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

// Import components
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

// Import CSS
import "./About.css";

const texts = ["Developer", "Designer"];

function About() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="about-section">
            <div className="about-border"></div>
            <ProfilePicture />
            <h1 className="about-title">Hi, I'm Greg</h1>
            <h2 className="about-intro">
                Web &#160;{" "}
                <TextTransition className="switch-text" springConfig={presets.wobbly}>
                    {texts[index % texts.length]}
                </TextTransition>
            </h2>
            <p className="about-body">I build websites to suit your need. From fun, interactive web applications to promotional and ecommerce sites. If you need a website, look no further.</p>
        </div>
    );
}

export default About;

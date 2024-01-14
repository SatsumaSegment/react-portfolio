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
            <ProfilePicture />
            <h1 className="about-title">Hi, I'm Greg</h1>
            <h2 className="about-intro">
                Web &#160;{" "}
                <TextTransition className="switch-text" springConfig={presets.wobbly}>
                    {texts[index % texts.length]}
                </TextTransition>
            </h2>
            <p className="about-body">
                I'm a self-taught programmer with knowledge a number of programming languages, including C++/C, Python and Javascript. I have a keen interest in computers, electronics and anything
                technology related, with over eight years’ experience assembling and repairing PC and laptop hardware. I have developed a number of software applications as a self-taught programmer
                and enjoy tinkering with microcontrollers such as the Arduino, Raspberry Pi and ESP-32.
            </p>
        </div>
    );
}

export default About;

import AdditionalSkillCard from "../AdditionalSkillCard/AdditionalSkillCard";

import "./AdditionalSkills.css";

function AdditionalSkills() {
    return (
        <div className="additional-skills-section">
            <div className="skills-title-section">
                <h1 className="skills-title">Additional Skills</h1>
                <i id="plus">+</i>
            </div>

            <div className="skills-main-section">
                <AdditionalSkillCard title="Development Boards/Microcontrollers" body="Arduino, ESP-32, Raspberry PI" />
                <AdditionalSkillCard title="PC Building and Repairs" body="Including: BIOS Configuration, RAID Configuration, Overclocking, Virus Removal" />
                <AdditionalSkillCard title="Electronics/Circuitry" body="Building Circuits, Surface Mount Soldering/De-soldering and Circuit Repair" />
            </div>
        </div>
    );
}
export default AdditionalSkills;

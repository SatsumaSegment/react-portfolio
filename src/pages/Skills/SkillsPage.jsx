import Skills from "../../components/Skills/Skills";
import AdditionalSkills from "../../components/Skills/AdditionalSkills";

import "./SkillsPage.css";

function SkillsPage() {
    return (
        <div className="skills-page">
            <div className="skills-content">
                <Skills />
                <AdditionalSkills />
            </div>
            <div className="resume-container">
                <a href="/Greg Duke CV.pdf" target="_blank">
                    <button className="resume-download">My Résumé</button>
                </a>
            </div>
        </div>
    );
}

export default SkillsPage;

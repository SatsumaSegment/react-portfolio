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
        </div>
    );
}

export default SkillsPage;

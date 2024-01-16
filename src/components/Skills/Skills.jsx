import SkillCard from "../SkillCard/SkillCard";

import "./Skills.css";
import icon from "../../assets/images/tech-stack.png";
import stack from "../../assets/tech-stack.json";

function Skills() {
    return (
        <div className="skills-section">
            <div className="stack">
                <h1 className="stack-title">Languages and Tools</h1>
                <img className="stack-icon" src={icon} alt="Tech-stack icon" />
            </div>
            <div className="skill-cards">
                {stack.data.map((item) => (
                    <SkillCard key={item.name} logo={item.logo} name={item.name} />
                ))}
            </div>
        </div>
    );
}

export default Skills;

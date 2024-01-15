import SkillCard from "../SkillCard/SkillCard";

import "./Skills.css";
import icon from "../../assets/images/tech-stack.png";
import stack from "../../assets/tech-stack.json";

function Skills() {
    return (
        <div className="skills-section">
            <div className="stack">
                <h1 className="stack-title">Tech-Stack</h1>
                <img className="stack-icon" src={icon} alt="Tech-stack icon" />
            </div>
            <div className="skill-cards">
                <SkillCard logo={stack.html.logo} name={stack.html.name} />
                <SkillCard logo={stack.css.logo} name={stack.css.name} />
                <SkillCard logo={stack.js.logo} name={stack.js.name} />
                <SkillCard logo={stack.jq.logo} name={stack.jq.name} />
                <SkillCard logo={stack.node.logo} name={stack.node.name} />
                <SkillCard logo={stack.react.logo} name={stack.react.name} />
                <SkillCard logo={stack.vite.logo} name={stack.vite.name} />
                <SkillCard logo={stack.sql.logo} name={stack.sql.name} />
                <SkillCard logo={stack.python.logo} name={stack.python.name} />
                <SkillCard logo={stack.flask.logo} name={stack.flask.name} />
                <SkillCard logo={stack.cpp.logo} name={stack.cpp.name} />
                <SkillCard logo={stack.c.logo} name={stack.c.name} />
                <SkillCard logo={stack.git.logo} name={stack.git.name} />
                <SkillCard logo={stack.github.logo} name={stack.github.name} />
                <SkillCard logo={stack.gitlab.logo} name={stack.gitlab.name} />
            </div>
        </div>
    );
}

export default Skills;

import "./SkillCard.css";

function SkillCard(props) {
    return (
        <div className="skill-card">
            <img className="skill-logo" src={props.logo} alt={props.name} />
            <h3 className="skill-name">{props.name}</h3>
        </div>
    );
}

export default SkillCard;

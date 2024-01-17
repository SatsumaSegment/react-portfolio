import "./AdditionalSkillCard.css";

function AdditionalSkillCard(props) {
    return (
        <div className="add-skill-card">
            <h3 className="add-skill-title">{props.title}</h3>
            <p className="add-skill-body">{props.body}</p>
        </div>
    );
}

export default AdditionalSkillCard;

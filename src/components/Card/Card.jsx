import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <img className="card-image" src={props.image} alt={props.title} />
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <a href={props.code} target="_blank">
                    <button className="card-button" id="card-btn-repo">
                        Code
                    </button>
                </a>
                <a href={props.demo} target="_blank">
                    <button className="card-button" id="card-btn-demo" href={props.demo}>
                        Demo
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Card;

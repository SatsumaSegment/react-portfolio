import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <img className="card-image" src={props.image} alt={props.title} />
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <button className="card-button" id="card-btn-repo" href={props.code}>
                    Code
                </button>
                <button className="card-button" id="card-btn-demo" href={props.demo}>
                    Demo
                </button>
            </div>
        </div>
    );
}

export default Card;

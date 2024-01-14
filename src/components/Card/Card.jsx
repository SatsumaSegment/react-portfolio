import "./Card.css";

function Card() {
    let card = document.querySelectorAll(".card");

    function mouseGlow(event) {
        let x = event.clientX;
        let y = event.clientY;

        console.log(x, y);
    }

    return (
        <div className="card" onMouseMove={mouseGlow}>
            <h3 className="card-title">Example Card</h3>
            <img className="card-image" src="https://picsum.photos/250/200" alt="" />
            <div className="card-body">
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae dignissimos tenetur omnis sed cumque.</p>
                <button className="card-button" id="card-btn-repo">
                    Code
                </button>
                <button className="card-button" id="card-btn-demo">
                    Demo
                </button>
            </div>
        </div>
    );
}

export default Card;

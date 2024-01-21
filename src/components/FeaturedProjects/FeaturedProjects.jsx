import { NavLink } from "react-router-dom";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import "./FeaturedProjects.css";

function FeaturedProjects() {
    return (
        <div className="featured-section">
            <h1 className="featured-title">Featured Projects</h1>
            <div className="card-container">
                <Carousel />
            </div>
            <div className="more-container">
                <NavLink to="/projects" end>
                    <button className="more-button">View More</button>
                </NavLink>
            </div>
        </div>
    );
}

export default FeaturedProjects;

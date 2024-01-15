import { motion } from "framer-motion";

import Card from "../Card/Card";

import "./FeaturedProjects.css";

function FeaturedProjects() {
    return (
        <div className="featured-section">
            <h1 className="featured-title">Featured Projects</h1>
            <div className="card-container">
                <Card />
                <Card />
            </div>
            <div className="featured-border"></div>
        </div>
    );
}

export default FeaturedProjects;

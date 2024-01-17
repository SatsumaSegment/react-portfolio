import { motion, useScroll } from "framer-motion";

import "./ProjectCard.css";

function ProjectCard() {
    return (
        <motion.div className="project-card" animate={{ left: 300 }} initial={{ left: 0 }}>
            <h1 className="project-card-title">Example Project Card</h1>
            <img className="project-card-image" src="https://picsum.photos/400/250" alt=""></img>
            <div className="project-card-body">
                <p className="project-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem, id eius et ad beatae laborum, corrupti vero soluta illum doloremque necessitatibus in, dolor cum.
                </p>
                <button className="project-card-button" id="project-btn-code">
                    Code
                </button>
                <button className="project-card-button" id="project-btn-demo">
                    Demo
                </button>
            </div>
        </motion.div>
    );
}

export default ProjectCard;

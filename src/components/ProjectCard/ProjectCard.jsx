import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./ProjectCard.css";

function ProjectCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div className="project-card" ref={ref} animate={{ x: isInView ? "25%" : "translateX()" }} initial={{ x: "-100%" }} transition={{ duration: 1 }}>
            <h1 className="project-card-title">Example Project Card</h1>
            <div className="project-card-images">
                <img className="project-card-image" src="https://picsum.photos/400/250" alt=""></img>
                <img className="project-card-image" src="https://picsum.photos/400/250" alt=""></img>
                <img className="project-card-image" src="https://picsum.photos/400/250" alt=""></img>
            </div>
            <div className="project-card-body">
                <p className="project-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem, id eius et ad beatae laborum, corrupti vero soluta illum doloremque necessitatibus in, dolor cum.
                </p>
                <div className="project-card-buttons">
                    <button className="card-button" id="card-btn-repo">
                        Code
                    </button>
                    <button className="card-button" id="card-btn-demo">
                        Demo
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;

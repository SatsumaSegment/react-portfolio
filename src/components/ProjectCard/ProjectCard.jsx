import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./ProjectCard.css";

function ProjectCard(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div className="project-card" ref={ref} animate={{ x: isInView ? "25%" : "translateX()" }} initial={{ x: props.side }} transition={{ duration: 1 }}>
            <h1 className="project-card-title">{props.title}</h1>
            <div className="project-card-images">
                <img className="project-card-image" src={props.image1} alt={props.title}></img>
                <img className="project-card-image" src={props.image2} alt={props.title}></img>
            </div>
            <div className="project-card-body">
                <p className="project-card-text">{props.description}</p>
                <div className="project-card-buttons">
                    <a href={props.code} target="_blank">
                        <button className="project-card-button" id="card-btn-repo">
                            Code
                        </button>
                    </a>
                    <a href={props.demo} target="_blank">
                        <button className="project-card-button" id="card-btn-demo">
                            Demo
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;

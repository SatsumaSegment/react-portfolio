import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Projects.css";

function Projects() {
    return (
        <div className="projects-page">
            <h1 className="projects-title">Things I've Made</h1>
            <div className="project-cards-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;

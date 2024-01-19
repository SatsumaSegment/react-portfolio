import ProjectCard from "../../components/ProjectCard/ProjectCard";

import data from "../../assets/projects.json";

import "./Projects.css";

function Projects() {
    return (
        <div className="projects-page">
            <h1 className="projects-title">Things I've Made</h1>
            <div className="project-cards-container">
                {data.data.map((item) => (
                    <ProjectCard key={item.id} title={item.name} image1={item.images[0]} image2={item.images[1]} description={item.description} code={item.links.code} demo={item.links.demo} />
                ))}
            </div>
        </div>
    );
}

export default Projects;

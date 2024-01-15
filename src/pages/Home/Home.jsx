import About from "../../components/About/About";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Skills from "../../components/Skills/Skills";

import "./Home.css";

function Home() {
    return (
        <>
            <div className="home-page-main">
                <About />
                <FeaturedProjects />
            </div>
            <div className="home-page-skills">
                <Skills />
            </div>
        </>
    );
}

export default Home;

import About from "../../components/About/About";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Skills from "../../components/Skills/Skills";
import AdditionalSkills from "../../components/Skills/AdditionalSkills";

import "./Home.css";

function Home() {
    return (
        <>
            <div className="home-page-main">
                <About />
                <FeaturedProjects />
            </div>
        </>
    );
}

export default Home;

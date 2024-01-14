import About from "../../components/About/About";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <About />
            <FeaturedProjects />
        </div>
    );
}

export default Home;

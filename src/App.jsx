// Module imports
import { Route, Routes } from "react-router-dom";

// Style imports
import "./assets/styles/App.css";

// Component imports
import Navbar from "./components/Header/Navbar";
import BackgroundAnimation from "./components/Particles/Particles";
import Footer from "./components/Footer/Footer";

// Page imports
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <BackgroundAnimation />
            <Footer />
        </div>
    );
}

export default App;

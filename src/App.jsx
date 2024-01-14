// Module imports
import { Route, Routes } from "react-router-dom";

// Style imports
import "./assets/styles/App.css";

// Component imports
import Navbar from "./components/Header/Navbar";
import BackgroundAnimation from "./components/Particles/Particles";

// Page imports
import About from "./pages/About/About";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
            </Routes>
            <BackgroundAnimation />
        </div>
    );
}

export default App;

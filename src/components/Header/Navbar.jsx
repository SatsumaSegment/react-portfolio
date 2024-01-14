import { NavLink } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="nav-brand">
                <img src=""></img>
                Brand Placeholder
            </a>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" end className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" end className="nav-link">
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skills" end className="nav-link">
                        Skills
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" end className="nav-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="nav-brand">
                <img className="brand-logo" src=""></img>
                Greg Duke
            </a>
            <ul className="nav-items nav-visible">
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
                    <NavLink to="/contact" end className="nav-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

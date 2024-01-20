import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

function Navbar() {
    const hamburgerIcon = <FontAwesomeIcon icon={faBars} size="2x" />;

    const [expanded, setExpand] = useState(false);

    function expandLinks() {
        setExpand((expanded) => !expanded);
    }

    let hamburgerState = expanded ? "expanded" : "";

    return (
        <nav className="navbar">
            <a href="/" className="nav-brand">
                <img className="brand-logo" src=""></img>
                Greg Duke
            </a>

            <i className="hamburger" onClick={expandLinks}>
                {hamburgerIcon}
            </i>

            <ul className={`nav-items nav-visible ${hamburgerState}`}>
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

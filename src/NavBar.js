import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/About">A propos</Link>
                </li>
                <li>
                    <Link to="/About">Experience</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
    let w = window.innerWidth;
    let h = window.innerWidth;
    let nbrClick = 0;
    function clicked() {
        document.getElementById("content-container").classList.toggle("hidden");
        nbrClick = nbrClick + 1;
        console.log(nbrClick);
        if (nbrClick % 2 == 0) {
            document.getElementById("burgerID").innerHTML = "Open";
        } else {
            document.getElementById("burgerID").innerHTML = "close";
        }
    }
    if (w > 800) {
        return (
            <div id="navbarID" className="NavBar">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/About">A propos</Link>
                    </li>
                    <li>
                        <Link to="/About">Experience</Link>
                    </li>
                    <li>
                        <Link to="/skills">Compétences</Link>
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div id="navbarID" className="Responsive-NavBar">
                <div className="burger" onClick={() => clicked()}>
                    <h2 id="burgerID">Open</h2>
                    <div id="content-container" className="hidden">
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/About">A propos</Link>
                            </li>
                            <li>
                                <Link to="/About">Experience</Link>
                            </li>
                            <li>
                                <Link to="/skills">Compétences</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;

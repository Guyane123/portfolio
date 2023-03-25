import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/modules/NavBar.css";

const NavBar = () => {
    let w = window.innerWidth;
    let [wi, setW] = useState(0);
    useEffect(() => {
        const handleWindowResize = (e) => {
            setW({ w: window.innerWidth });
        };
        window.addEventListener("resize", () => handleWindowResize());
        // return () => {
        //     window.removeEventListener("resize", handleWindowResize());
        // };
    });
    let nbrClick = 0;
    function clicked() {
        document.getElementById("content-container").classList.toggle("hidden");
        nbrClick = nbrClick + 1;
        console.log(nbrClick);
        if (nbrClick % 2 === 0) {
            document.getElementById("burgerID").innerHTML = "🍔";
        } else {
            document.getElementById("burgerID").innerHTML = "&#10006";
        }
    }
    function changeColor() {
        document.getElementById("sun").classList.toggle("sun");
        document.getElementById("sun").classList.toggle("moon");
        document.getElementById("goUp").classList.toggle("blackGoUp");
        document
            .getElementById("colorContainer")
            .classList.toggle("blackColorContainer");
        document.body.classList.toggle("blackMode");
        const message = document.querySelectorAll(".message");
        message.forEach((element) => {
            element.classList.toggle("blackMessage");
        });
    }
    if (w > 800) {
        return (
            <div>
                <div className="NavBar">
                    <div className="logo"></div>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/About">A propos</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <div
                                onClick={() => changeColor()}
                                className="colorContainer"
                            >
                                <div id="sun" className="sun"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div
                id="navbarID"
                className="Responsive-NavBar"
                onLoad={changeColor}
            >
                <div className="burger" onClick={() => clicked()}>
                    <h2 id="burgerID">
                        <span role="img" aria-label="open">
                            🍔
                        </span>
                    </h2>
                    <div id="content-container" className="hidden">
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/About">A propos</Link>
                            </li>
                            <li></li>
                            <li>
                                <Link to="/skills">Compétences</Link>
                            </li>
                            <li>
                                <div
                                    id="colorContainer"
                                    onClick={() => changeColor()}
                                    className="colorContainer"
                                >
                                    <div id="sun" className="sun"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;

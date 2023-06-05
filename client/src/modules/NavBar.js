import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/modules/NavBar.css";

const NavBar = () => {
    let w = window.innerWidth;
    let [wi, setWi] = useState();
    useState(() => {
        const handleWindowResize = (e) => {
            setWi({ w: window.innerWidth });
        };
        window.addEventListener("resize", () => handleWindowResize());
    });
    let nbrClick = 0;
    function clicked() {
        document
            .getElementById("responsivecontent-container")
            .classList.toggle("hidden");
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
        document.querySelector(".goUp").classList.toggle("blackGoUp");
        document.getElementById("page").classList.toggle("blackText");
        document.getElementById("socialMedia").classList.toggle("blackText");
        document.getElementById("about").classList.toggle("blackText");
        document.getElementById("contact").classList.toggle("blackText");
        document
            .getElementById("colorContainer")
            .classList.toggle("blackColorContainer");
        document.body.classList.toggle("blackMode");
        const message = document.querySelectorAll(".message");
        const langages = document.getElementById("lan");
        checkIfLoaded(langages);
        checkIfLoaded(document.getElementById("Experience"));
        function checkIfLoaded(element) {
            if (element) {
                element.classList.toggle("blackMode");
            } else {
            }
        }
        if (message) {
            message.forEach((e) => {
                e.classList.toggle("blackMessage");
            });
        } else {
        }
    }
    if (w > 500) {
        return (
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
                            id="colorContainer"
                            onClick={() => changeColor()}
                            className="colorContainer"
                        >
                            <div id="sun" className="sun"></div>
                        </div>
                    </li>
                </ul>
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
                    <div id="responsivecontent-container" className="hidden">
                        <ul>
                            <li>
                                <div
                                    id="colorContainer"
                                    onClick={() => changeColor()}
                                    className="colorContainer"
                                >
                                    <div id="sun" className="sun"></div>
                                </div>
                            </li>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/About">A propos</Link>
                            </li>
                            <li></li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;

import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import "../styles/modules/NavBar.css";
import Competences from "./Competences.js";

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
        document.getElementById("goUp").classList.toggle("blackGoUp");
        document
            .getElementById("colorContainer")
            .classList.toggle("blackColorContainer");
        document.querySelector(".langages").style.backgroundColor =
            document.body.style.backgroundColor;
        document.body.classList.toggle("blackMode");
        const message = document.querySelectorAll(".message");
        message.forEach((element) => {
            element.classList.toggle("blackMessage");
        });
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

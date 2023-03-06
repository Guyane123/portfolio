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
    // window.onresize = () => {
    //     if (window.innerWidth > 800) {
    //         document
    //             .getElementById("navbarID")
    //             .classList.remove("Responsive-NavBar");
    //         document.getElementById("navbarID").classList.add("NavBar");
    //         document.getElementById("navbarID").innerHTML =
    //             "<ul>" +
    //             "<li>" +
    //             '<a style="color:white" href="./">Accueil</a>' +
    //             "</li>" +
    //             "<li>" +
    //             '<a href="./about">A propos</a>' +
    //             "</li>" +
    //             "<li>" +
    //             "<a href='./experience'>Experience</a>";
    //     } else {
    //         document.getElementById("navbarID").classList.remove("NavBar");
    //         document
    //             .getElementById("navbarID")
    //             .classList.add("Responsive-NavBar");
    //         document.getElementById("navbarID").innerHTML =
    //             '<div class="burger" onclick="clicked()"' +
    //             "<h2 id='burgerID'>3</h2>" +
    //             "<div id='content-container' class='hidden'>" +
    //             "<ul>" +
    //             "<li>" +
    //             '<a href="./">Accueil</a>' +
    //             "</li>" +
    //             "<li>" +
    //             '<a href="./about">A propos</a>' +
    //             "</li>" +
    //             "<li>" +
    //             '<a href="./experience">experience</a>' +
    //             "</li>" +
    //             "</ul>" +
    //             "</div>" +
    //             "</div>" +
    //             "</div>";
    //     }
    // };
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
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;

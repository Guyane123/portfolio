// import React from 'react';
import { Link } from "react-router-dom";
import "../styles/modules/Navbar.css";
import "../styles/main.css";
import ThemeContext from "./Context/ThemeContext.tsx";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import "../App.tsx";

const Navbar = function () {
    const { handleThemeChange, theme } = useContext(ThemeContext);
    const className = "nav-" + theme;
    const w = useRef(window.innerWidth);
    const span = useRef<HTMLSpanElement>(null);

    const handleBurgerClick = useCallback(function () {
        document.querySelector(".nav-container")?.classList.toggle("visible1");
    }, []);

    const handleThemeChangeClick = function () {
        if (span.current?.innerText === "light_mode") {
            span.current.innerText = "dark_mode";
        } else if (span.current?.innerText === "dark_mode") {
            span.current.innerText = "light_mode";
        }
        handleThemeChange();
    };

    console.log();
    return (
        <>
            <nav className={className}>
                    <div
                        id="nav-burger"
                        onClick={handleBurgerClick}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                    <div className="nav-container">
                        <ul>
                            <li
                                className="nav-item"
                                onClick={handleBurgerClick}
                            >
                                <Link to="/">
                                    <span className="material-symbols-outlined">
                                        home
                                    </span>
                                    Accueil
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                                onClick={handleBurgerClick}
                            >
                                <Link to="/About">
                                    <span className="material-symbols-outlined">
                                        search
                                    </span>
                                    A propos
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                                onClick={handleBurgerClick}
                            >
                                <Link to="/Contact">
                                    <span className="material-symbols-outlined">
                                        message
                                    </span>
                                    Contact
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                                onClick={handleThemeChangeClick}
                            >
                                <div className="changeThemeButton">
                                    <span
                                        ref={span}
                                        className="mode material-symbols-outlined"
                                    >
                                        light_mode
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    );
};

export default Navbar;

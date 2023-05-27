import React, { useEffect, useState } from "react";
import "../styles/pages/Home.css";
import Moi from "../modules/Moi";
import Marquee from "../modules/Marquee";
import NavBar from "../modules/NavBar";
import "css-doodle";
import Competences from "../modules/Competences";
import Footer from "../modules/Footer";

const Home = () => {
    useEffect(() => {
        blackMode();
    });
    function blackMode() {
        if (document.body.classList == "blackMode") {
            console.log("black");
            document.getElementById("m1").classList.add("blackMessage");
            document.getElementById("m2").classList.add("blackMessage");
            document.getElementById("m3").classList.add("blackMessage");
            document.getElementById("m4").classList.add("blackMessage");
        } else {
            console.log("white");
            document.getElementById("m1").classList.remove("blackMessage");
            document.getElementById("m2").classList.remove("blackMessage");
            document.getElementById("m3").classList.remove("blackMessage");
            document.getElementById("m4").classList.remove("blackMessage");
        }
    }
    return (
        <div className="modules">
            <div className="Home">
                <ul>
                    <li>
                        <div className="pfp pfp1"></div>
                        <div className="message blackMessage message1" id="m1">
                            Hello !
                            <span aria-label="Hello Emoji" role="img" id="hand">
                                👋
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="pfp pfp2"></div>
                        <div
                            className="message  blackMessage  message2"
                            id="m2"
                        >
                            Je m'appelle Damien.
                        </div>
                    </li>
                    <li>
                        <div className="pfp pfp3"></div>
                        <div className="message  blackMessage message3" id="m3">
                            J'ai 14 ans.
                        </div>
                    </li>
                    <li>
                        <div className="pfp pfp4"></div>
                        <div className="message blackMessage  message4" id="m4">
                            J'aimerais être un dév.
                        </div>
                    </li>
                </ul>
                <Moi />
            </div>
            <Marquee />
            <Competences />
        </div>
    );
};

export default Home;

import React from "react";
import "../styles/Home.css";
import Moi from "../Moi";

const Home = () => {
    return (
        <div className="Home modules">
            <ul>
                <li>
                    <div className="pfp pfp1"></div>
                    <div className="message message1">
                        Hello !<span id="hand">👋</span>
                    </div>
                </li>
                <li>
                    <div className="pfp pfp2"></div>
                    <div className="message message2">Je m'appelle Damien.</div>
                </li>
                <li>
                    <div className="pfp pfp3"></div>
                    <div className="message message3">J'ai 14 ans.</div>
                </li>
                <li>
                    <div className="pfp pfp4"></div>
                    <div className="message message4">
                        J'aimerais être un dév.
                    </div>
                </li>
            </ul>
            <Moi />
        </div>
    );
};

export default Home;
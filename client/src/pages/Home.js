import React from "react";
import "../styles/pages/Home.css";
import Moi from "../modules/Moi";
import Marquee from "../modules/Marquee";
import "css-doodle";
import Competences from "../modules/Competences";

const Home = () => {
    return (
        <div className="modules">
            <div className="Home">
                <ul>
                    <li>
                        <div className="pfp pfp1"></div>
                        <div className="message blackMessage message1">
                            Hello !
                            <span aria-label="Hello Emoji" role="img" id="hand">
                                👋
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="pfp pfp2"></div>
                        <div className="message blackMessage message2">
                            Je m'appelle Damien.
                        </div>
                    </li>
                    <li>
                        <div className="pfp pfp3"></div>
                        <div className="message blackMessage message3">
                            J'ai 14 ans.
                        </div>
                    </li>
                    <li>
                        <div className="pfp pfp4"></div>
                        <div className="message blackMessage message4">
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

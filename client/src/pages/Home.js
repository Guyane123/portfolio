import React, { useEffect } from "react";
import "../styles/pages/Home.css";
import Moi from "../modules/Moi";
import Marquee from "../modules/Marquee";
import "css-doodle";
import Competences from "../modules/langages/Competences";
import Experiences from "../modules/Experiences";

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
                            J'aimerais être un développeur.
                        </div>
                    </li>
                </ul>
                <Moi />
            </div>
            <Marquee />
            <Competences />
            <Experiences />
            <css-doodle click-to-update>
                <style>
                    @grid: 1 / 200vw 200vh; background-color:{" "}
                    {document.body.style.backgroundColor}; background-size:
                    200px 200px; background-image: @doodle( @grid: 6 / 200%;
                    @size: 4px; font-size: 4px; color: hsl(@r240, 30%, 50%);
                    box-shadow: @m3x5( calc(4em - @nx * 1em) calc(@ny * 1em)
                    @p(@m3(currentColor), @m2(transparent)), calc(2em + @nx *
                    1em) calc(@ny * 1em) @lp ); );
                </style>
            </css-doodle>
        </div>
    );
};

export default Home;

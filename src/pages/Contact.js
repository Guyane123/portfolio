import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

const About = () => {
    const [mousePos, setMousePos] = useState(0);
    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log(e);
            if (
                // e.clientX < 100 &&
                // e.clientX > 300 &&
                e.clientY > 140 &&
                e.clientY < 490
            ) {
                setMousePos({ x: e.clientX, y: e.clientY });
            }
        };
        document
            .getElementById("card")
            .addEventListener("mousemove", handleMouseMove);
        return () => {
            document
                .getElementById("card")
                .removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className="Contact modules">
            <div id="card" className="card">
                <div
                    id="circle"
                    style={{
                        left: (mousePos.x / window.innerWidth) * 100 + "%",
                        top: (mousePos.y / window.innerHeight) * 100 + "%",
                    }}
                ></div>
                <div className="block">
                    <h3>
                        ({mousePos.x}, {mousePos.y})
                    </h3>
                    <h3>Contact</h3>
                    <a href="mailto:m.claretdamien@gmail">
                        claretdamien@gmail.com
                    </a>
                    <p>0633191067</p>
                    <h4>Bretagne, Morbihan</h4>
                </div>
            </div>
            <div className="contactInputs">
                <label for="name">
                    <span>Votre prénom</span>
                    <span className="required">*</span>
                </label>
                <input
                    id="name"
                    name="name"
                    className="input"
                    required
                    placeholder="Your name"
                    type="text"
                ></input>
                <label for="email">
                    <span>E-mail</span>
                    <span className="required">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    required
                    className="input"
                    placeholder="email"
                    type="email"
                ></input>{" "}
                <br />
                <br />
                <label for="message">
                    <span>Message</span>
                    <span className="required">*</span>
                </label>
                <input
                    id="message"
                    name="message"
                    required
                    className="input"
                    placeholder="your text"
                    type="text"
                ></input>{" "}
                <br />
                <br />
                <input id="submit" className="input" type="submit"></input>
            </div>
        </div>
    );
};

export default About;

import React, { useState, useEffect } from "react";
import "../styles/pages/Home.css";
import "../styles/modules/Competences.css";
// import CallToAction from "./CallToAction";

const Competences = () => {
    const containers = document.querySelectorAll(".container");
    const [mousePos, setMousePos] = useState(0);
    let mouseIsDown = false;
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        document
            .querySelector(".langages")
            .addEventListener("mousemove", handleMouseMove);
    }, []);
    function mouseDown(id) {
        mouseIsDown = true;
        console.log("y");
        if (mouseIsDown === true) {
            document.getElementById(id).style.left =
                (mousePos.x / window.innerWidth) * 100 + "%";
        }
        window.addEventListener("mousedown", function() {
            mouseIsDown = true;
        });
        window.addEventListener("mouseup", function() {
            mouseIsDown = false;
        });
    }

    return (
        <div className="Footer" id="footer">
            {/* <CallToAction /> */}
            <div className="langages">
                <div
                    className="container"
                    id="a"
                    onMouseMove={() => mouseDown("a")}
                >
                    <h2>JavaScript</h2>
                </div>
                <div
                    className="container"
                    id="b"
                    onMouseMove={() => mouseDown("b")}
                >
                    <h2>HTML</h2>
                </div>
                <div
                    className="container"
                    id="c"
                    onMouseMove={() => mouseDown("c")}
                >
                    <h2>CSS</h2>
                </div>
                <div
                    className="container"
                    id="d"
                    onMouseMove={() => mouseDown("d")}
                >
                    <h2>Node.js</h2>
                </div>
                <div
                    className="container"
                    id="e"
                    onMouseMove={() => mouseDown("e")}
                >
                    <h2>React</h2>
                </div>
                <div
                    className="container"
                    id="f"
                    onMouseMove={() => mouseDown("f")}
                >
                    <h2>X</h2>
                </div>
            </div>
            <css-doodle click-to-update>
                <style>
                    @grid: 1 / 100vw 100vh; background-color:{" "}
                    {document.body.style.backgroundColor}; background-size:
                    200px 200px; background-image: @doodle( @grid: 6 / 100%;
                    @size: 4px; font-size: 4px; color: hsl(@r240, 30%, 50%);
                    box-shadow: @m3x5( calc(4em - @nx * 1em) calc(@ny * 1em)
                    @p(@m3(currentColor), @m2(transparent)), calc(2em + @nx *
                    1em) calc(@ny * 1em) @lp ); );
                </style>
            </css-doodle>
        </div>
    );
};

export default Competences;

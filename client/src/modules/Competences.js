import React, { useState, useEffect } from "react";
import "../styles/pages/Home.css";
import "../styles/modules/Competences.css";
import Nodejs from "./Nodejs";
import TReact from "./TReact";
import HTML from "./HTML";
import CSS from "./CSS";

const Competences = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    function handleMouseDown(e) {
        setIsDragging(true);
        setStartPosition({ x: e.clientX, y: e.clientY });
    }

    function handleMouseMove(e) {
        if (isDragging) {
            const dx = e.clientX - startPosition.x;
            const dy = e.clientY - startPosition.y;
            setPosition({ x: position.x + dx, y: position.y + dy });
            setStartPosition({ x: e.clientX, y: e.clientY });
        }
    }

    function handleMouseUp() {
        setIsDragging(false);
    }
    let w = window.innerWidth;
    return (
        <div className="Footer" id="footer">
            <div
                className="langages blackMode"
                style={{
                    backgroundColor: document.body.style.backgroundColor,
                }}
            >
                <div
                    className="container"
                    id="f"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    // onTouchStart={handleMouseDown}
                    // onTouchEnd={handleMouseUp}
                    // onTouchMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{
                        position: "relative",
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        width: "200px",
                        height: "100px",
                        backgroundColor: "yellow",
                        cursor: isDragging ? "grabbing" : "grab",
                    }}
                >
                    <h2>JavaScript</h2>
                </div>
                <CSS />
                <HTML />
                <TReact />
                <Nodejs />
            </div>
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

export default Competences;
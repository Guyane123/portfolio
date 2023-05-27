import React, { useEffect, useState } from "react";
import "../styles/pages/Home.css";
import "../styles/modules/Competences.css";
import Nodejs from "./Nodejs";
import TReact from "./TReact";
import HTML from "./HTML";
import CSS from "./CSS";

const Competences = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({
        x: Math.random() * 100,
        y: Math.random() * 100,
    });
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
    function handleTouchMove(e) {
        if (isDragging) {
            const touch = e.touches[0];
            const tx = touch.clientX - startPosition.x;
            const ty = touch.clientY - startPosition.y;
            setPosition({ x: position.x + tx, y: position.y + ty });
            setStartPosition({ x: touch.clientX, y: touch.clientY });
        }
    }
    function handleTouchStart(e) {
        setIsDragging(true);
        setStartPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }

    function handleMouseUp() {
        setIsDragging(false);
    }
    useEffect(() => {
        blackMode();
    });
    function blackMode() {
        if (document.body.classList == "blackMode") {
            document.getElementById("lan").classList.add("blackMode");
        } else {
            document.getElementById("lan").classList.remove("blackMode");
        }
    }
    return (
        <div className="Competences" id="competences">
            <div className="title">Mes compétences</div>
            <div className="langages" id="lan">
                <div
                    draggable="false"
                    className="container"
                    id="javascript"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseUp}
                    style={{
                        transform: isDragging ? "scale(120%)" : "scale(100%)",
                        zIndex: isDragging ? "999" : "0",
                        position: "relative",
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        cursor: isDragging ? "grabbing" : "grab",
                    }}
                >
                    {/* <h2>JavaScript</h2> */}
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

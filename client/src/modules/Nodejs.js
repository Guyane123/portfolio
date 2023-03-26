import React, { useState } from "react";

const Nodejs = () => {
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
    return (
        <div
            className="container"
            id="d"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
                position: "relative",
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: "200px",
                height: "100px",
                backgroundColor: "green",
                cursor: isDragging ? "grabbing" : "grab",
            }}
        >
            <h2>Node.js</h2>
        </div>
    );
};

export default Nodejs;
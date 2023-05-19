import React, { useState, useEffect } from "react";

const TReact = () => {
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
    return (
        <div
            className="container"
            id="react"
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
            {/* <h2>React</h2> */}
        </div>
    );
};

export default TReact;

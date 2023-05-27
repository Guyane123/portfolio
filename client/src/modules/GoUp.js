import React, { useEffect } from "react";

const GoUp = () => {
    function handleClick(e) {
        // e.preventDefault();
        window.scrollTo(0, 0, 200);
    }

    return (
        <div>
            <button onClick={() => handleClick()} id="btn" className="goUp">
                ↑ To Top
            </button>
        </div>
    );
};

export default GoUp;

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ModuleText = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollOffset = window.innerHeight * 0.4; // Adjust this value based on your requirements
            const isElementVisible = window.scrollY > scrollOffset;
            setIsVisible(isElementVisible);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`moduleText fadeIn ${isVisible ? "visible" : ""}`}>
            <div id="illustration"></div>
            <div id="textContent">
                <div className="titleText">Présentation</div>
                <div className="text">
                    Je suis un développeur passionné, avide de défis et prêt à
                    créer des expériences numériques exceptionnelles. Avec une
                    maîtrise approfondie de JavaScript, HTML et CSS, je suis
                    capable de transformer des idées en réalité grâce à des
                    interfaces web fluides et intuitives.
                </div>
                <Link to="/contact" className="btn">
                    Me contacter !
                </Link>
            </div>
        </div>
    );
};

export default ModuleText;

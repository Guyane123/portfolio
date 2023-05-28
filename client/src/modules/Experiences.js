import React from "react";
import "../styles/modules/Experiences.css";

const Experiences = () => {
    return (
        <div className="Experiences">
            <h2>Experiences</h2>

            <div className="projects">
                <a href="https://damien-projet.fr/cleather" target="_blank">
                    <div className="cleather">
                        <h1>Cleather ⛅</h1>
                        <h4>Regardez la météo</h4>
                    </div>
                </a>
                <div className="cleather"></div>
            </div>
        </div>
    );
};

export default Experiences;

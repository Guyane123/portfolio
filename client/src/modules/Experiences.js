import React from "react";
import "../styles/modules/Experiences.css";

const Experiences = () => {
    return (
        <div className="Experiences">
            <h2>Experiences</h2>

            <div className="projects">
                <a href="https://damien-projet.fr/cleather" target="_blank">
                    <div className="container" id="cleather">
                        <h1>Cleather ⛅</h1>
                        <h4>Regardez la météo</h4>
                    </div>
                </a>
                <a href="https://damien-projet.fr/stupidsGames">
                    <div className="container" id="games">
                        <h1>Jeux 🎮</h1>
                        <h4>Petits jeux</h4>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Experiences;

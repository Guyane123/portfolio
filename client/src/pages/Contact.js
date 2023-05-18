import React, { useState, useEffect } from "react";
import "../styles/pages/Contact.css";

const About = () => {
    const [mousePos, setMousePos] = useState(0);
    useEffect(() => {
        const handleMouseMove = (e) => {
            // console.log(e);
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
    }, []);
    const [author1, setAuthor] = useState("");
    const [message1, setMessage] = useState("");
    const [mail1, setMail] = useState("");

    const handleSubmit = (e) => {
        const data = {
            author: author1.author,
            message: message1.message,
            mail: mail1.mail,
        };

        fetch("http://localhost:5000/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de l'envoi de la requête");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data); // Affiche la réponse de l'API au format JSON
                alert("message envoyé");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleChangeAuthor = (e) => {
        setAuthor({ author: e.target.value });
    };
    const handleChangeMessage = (e) => {
        setMessage({ message: e.target.value });
    };
    const handleChangeMail = (e) => {
        setMail({ mail: e.target.value });
    };
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
            <div>
                <div className="contactInputs">
                    <label for="name">
                        <span>Votre prénom</span>
                        <span className="required">*</span>
                    </label>
                    <input
                        value={author1.author}
                        onChange={handleChangeAuthor}
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
                        value={mail1.mail}
                        onChange={handleChangeMail}
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
                        value={message1.message}
                        onChange={handleChangeMessage}
                        id="message"
                        name="message"
                        required
                        className="input"
                        placeholder="your text"
                        type="text"
                    ></input>{" "}
                    <br />
                    <br />
                    <button
                        id="submit"
                        onClick={handleSubmit}
                        className="input"
                        // type="submit"
                    >
                        Envoyer!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

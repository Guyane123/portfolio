import React, { ReactNode } from "react";
import "../assets/langages/HTML.svg";
import "../styles/pages/Home.css";
import LangagesComponent from "../modules/Langages";
import ProjectsComponent from "../modules/Projects";
import scrollTo  from 'scroll-to'
import '../styles/modules/ToTop.css'
import { useEffect } from 'react';


class Intro extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <h2 className="title">Introduction</h2>
                <div className="intro-container">
                    <div className="meImg"></div>
                    <p>
                        <span>«</span>Passionné de programmation, je suis
                        constamment animé par le désir de perfectionner mes
                        compétences et de me surpasser. Fort d'une expérience
                        solide, je suis capable de mener des projets de la
                        conception à la réalisation. Mon engagement et ma
                        détermination sont les moteurs qui me poussent à
                        explorer de nouvelles opportunités et à repousser
                        constamment mes limites dans le domaine de la
                        programmation. <span>»</span>
                        <span className="cursor">|</span>
                    </p>
                </div>
            </>
        );
    }
}

const MessageComponent = ({ message }: { message: string | ReactNode }) => {
    return <div className="message-item">{message}</div>;
};

const Messages = () => {
    let langages = document.querySelector(".langages-wrapper")
    let rect = langages?.getBoundingClientRect()

    useEffect(() => {
        langages = document.querySelector(".langages-wrapper")
        rect = langages?.getBoundingClientRect()
    }, [])


    function handleClick() {
        scrollTo(0, rect ? rect.height + 300 : 1200, {ease: "linear", duration: 600 });
    }

    return (
        <ul className="message-list">
            <li>
                <MessageComponent
                    message={
                        <h2>
                            Salut !
                            <div className="handshake">
                                <span>👋</span>
                            </div>
                        </h2>
                    }
                />
            </li>
            <li>
                <MessageComponent
                    message={<h2>Je m'appelle Damien Claret</h2>}
                />
            </li>
            <li>
                <div className="message-itemwWithPfP">
                    <div className="pfP" style={{ marginRight: "-50px" }}></div>
                    <MessageComponent
                        message={
                            <h2>
                                Je suis passioné par le{" "}
                                <span
                                    style={{cursor:"pointer"}}
                                    className="thirdary"
                                    onClick={handleClick}
                                >
                                    développement web
                                </span>
                            </h2>
                        }
                    />
                </div>
            </li>
        </ul>
    );
};

const Github = () => {
    return (
        <div className="github">
            <div className="github-container">
                <a href="https://github.com/Guyane123" target="_blank">
                    Regarder mon <span className="link">Github !</span>
                </a>
            </div>
        </div>
    );
};

class Home extends React.Component {
    componentDidMount(): void {
        document.title = "Damien Claret | Home";
    }

    render() {
        return (
            <>
                <div className="home">
                    <Messages />
                    <Github />
                </div>
                <Intro />
                <div className="langages-wrapper">
                    <LangagesComponent />
                </div>
                <div className="projects-wrapper">
                    <ProjectsComponent />
                </div>
            </>
        );
    }
}

export default Home;

import React, { ReactNode } from "react";
import "../assets/langages/HTML.svg";
import "../styles/pages/Home.css";
import LangagesComponent from "../modules/Langages";
import ProjectsComponent from "../modules/Projects";

const MessageComponent = ({ message }: { message: string | ReactNode }) => {
    return <div className="message-item">{message}</div>;
};

const Messages = () => {
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
                                <span className="thirdary">
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

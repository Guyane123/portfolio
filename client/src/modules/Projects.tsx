import React from "react";
import carousel from "../utils/carousel";
import "../styles/modules/Projetcs.css";
import "../assets/Cleather.png";
import { Link } from "react-router-dom";

interface ProjectsItemProps {
    img: string;
    desc: string;
}

class ProjectsItem extends React.Component<ProjectsItemProps> {
    img: string;
    desc: string;

    constructor(props: ProjectsItemProps) {
        super(props);
        this.img = this.props.img;
        this.desc = this.props.desc;
    }

    render(): React.ReactNode {
        return (
            <Link to={`./project/${this.img}`}>
                <div className="items">
                    <div
                        className={`${this.img} img`}
                        // style={{ backgroundImage: `url(${this.img})` }}
                    ></div>
                    <div className="desc">{this.desc}</div>
                </div>
            </Link>
        );
    }
}

class ProjectsComponent extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
    }

    componentDidMount(): void {
        const c1 = document.querySelector(".carousel1") as HTMLDivElement;
        new carousel(c1, {
            displayedItems: 1,
            slideItems: 1,
        });
    }

    render(): React.ReactNode {
        return (
            <>
                <title>Projets</title>
                <div className="carousel1">
                    <ProjectsItem desc="Minuteur permet de consulter le nombre de jours restant avant la fin ou le début des vacances" img={"minuteur"} />
                    <ProjectsItem
                        desc="Cleather permet de consulter la météo et la température d'une ville"
                        img={"cleather"}
                    />
                </div>
            </>
        );
    }
}

export default ProjectsComponent;

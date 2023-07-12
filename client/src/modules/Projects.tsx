import React from "react"
import carousel from "../utils/carousel";
import '../styles/modules/Projetcs.css'

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
            <div className="items">
                <div
                    className="img"
                    style={{ backgroundImage: `url(${this.img})` }}
                ></div>
                <div className="desc">{this.desc}</div>
            </div>
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
                    <ProjectsItem
                        desc="Cleather permet de consulter la météo et la température d'une ville"
                        img="https://picsum.photos/601/500"
                    />
                    <ProjectsItem
                        desc="Ce portolio"
                        img="https://picsum.photos/600/500"
                    />
                </div>
            </>
        );
    }
}


export default ProjectsComponent

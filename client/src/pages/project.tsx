import "../styles/pages/Project.css";

interface projectType {
    img: string;
    name: string;
    desc: string;
    me: string,
    link?: string
}

const Project = ({ img, name, desc, me, link }: projectType) => {
    return (
        <div className="Project">
            <div
                className="page-header"
                style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="title--wrapper">
                <h1>{name}</h1>
                <p>{me}</p>
            </div>
            <div className="about-project">
                <img className="project-image" src={img}></img>
                <p>{desc}</p>
            </div>
            <div className="btn">
                <a className="project-link" href={ link }>Voir le site</a>
            </div>
        </div>
    );
};

export default Project;

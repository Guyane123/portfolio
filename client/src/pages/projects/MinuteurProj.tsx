import Project from "../project";
import minuteur from "./../../assets/Minuteur.png"
const MinuteurProj = () => {

    let desc = "Ce minuteur permet de consulter le nombre de jours restant avant la fin ou le début des vacances \n\n"

    return (
        <Project name="Minuteur" img={minuteur} link="https://damien-projet.fr/minuteur" desc={desc} me={ "J'ai réalisé ce projet HTML, CSS et JS de A à Z" } />
    )
};

export default MinuteurProj;
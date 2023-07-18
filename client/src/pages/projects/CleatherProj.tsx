import Project from "../project";
import cleather from "./../../assets/Cleather.png"
const CleatherProj = () => {
    let desc = "Cleather permet de consulter la météo et la température d'une ville\n"
    desc += "Fonctionnalités ⚙️\n"
    desc += "Recherche de lieu : Entrez le nom d'une ville ou de tout autre endroit d'intérêt pour obtenir les informations météo.\n"
    desc += "Météo actuelle : Récupérez les données météo en temps réel : la température et les conditions météorologiques.\n"
    desc += "Projet fonctionnant avec WeatherAPI\n";

    return (
        <Project name="Cleather" img={cleather} link="https://damien-projet.fr/cleather" desc={desc} me={ "J'ai réalisé cleather avec l'aide de openWeatherAPI" } />
    )
};

export default CleatherProj;
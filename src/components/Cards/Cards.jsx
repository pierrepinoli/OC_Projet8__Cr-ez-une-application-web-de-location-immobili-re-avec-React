// importations des dependances
import { NavLink } from "react-router-dom";

// utilisation de props pour permettre de remplir les cartes avec les données du fichier JSON dans le composant parent
function Cards({ data }) {
    // établissement du DOM
    return (
        <div>
            <div className="cards__grid">
                {/* utilisation de la fonction map pour sectionner les infos du logements.json*/}
                {data.map(item => (
                    <div key={item.id} className="card">
                        {/* utilisation de la propriété NavLink de react-router-dom */}
                        <NavLink to={`/Housing/${item.id}`}>
                            <div className="card__image" style={{ backgroundImage: `url(${item.cover})` }}></div>
                            <div className="card__title">{item.title}</div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

// exportation du composant
export default Cards;
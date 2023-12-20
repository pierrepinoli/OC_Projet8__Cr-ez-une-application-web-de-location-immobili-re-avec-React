// importations des dependances
import { NavLink } from "react-router-dom";

// importations des fichiers annexes
import data from '../../assets/logements.json';

// utilisation de props pour permettre de remplir les cartes avec les données du fichier JSON dans le composant parent
function Cards() {
  return (
    <div>
      <div className="cards__grid">
        
      {data.map(item => (
    <div key={item.id} className="card">
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

//exportation du composant
export default Cards;
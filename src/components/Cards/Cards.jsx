import './cards.scss';
import data from '../../assets/logements.json';
import { NavLink } from "react-router-dom";


function Cards() {
  return (
    <div>
      <div className="cards__grid">
        {data.map(item => (
          <div key={item.id} className="card">
            {/* Utilisez le paramètre id dynamique dans le lien */}
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

export default Cards;
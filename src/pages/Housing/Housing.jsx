
// importations des dependances
import React from 'react';
import { Navigate , useParams } from 'react-router-dom';

import Collapse from '../../components/Collapse/Collapse.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import StarRating from '../../components/StarRating/StarRating.jsx';

// importations des fichiers annexes
import data from '../../assets/logements.json';

// importations du css
import './housing.scss';


const Housing = () => {
  const { id } = useParams();

  // Utilisez l'ID pour obtenir les données spécifiques de votre fichier JSON
  const housingData = data.find(item => item.id === id);
  console.log("Pictures:", housingData.pictures);
  // Si le logement n'est pas trouvé, redirige vers la page 404
  if (!housingData) {
    return <Navigate to="/404" />;
  }

  return (
    <main className='main__housing'>

    {/* importation du composant slideshow */}
      <Slideshow pictures={housingData.pictures} />

      <section className="section__housing">
        <div className="title__bar">
          <div className="title__box">
            <h2>{housingData.title}</h2>
            <p>{housingData.location}</p>
          </div>

          <div className="host__box">
            <div className="host__name">
              <p>{housingData.host.name}</p>
            </div>
            <div className="host__pictureprofile">
              <img src={housingData.host.picture} alt={housingData.host.name} />
            </div>
          </div>
        </div>
        
        <div className="tag__box">
          <div className="tag__line">
            {housingData.tags.map(tag => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </div>

    {/* importation du composant enfant starrating */}
          <StarRating rating={housingData.rating} />

        </div>
        
        {/* double importation du composant enfant collapse */}
        <div className="collapse__housing">
          <Collapse title="Description">
            <p>{housingData.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {housingData.equipments.map(equipment => (<li key={equipment}>{equipment}</li>))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  );
};

//exportation du composant
export default Housing;
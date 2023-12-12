import React from 'react';
import { Navigate } from 'react-router-dom'; // Importez le composant Navigate
import Collapse from '../../components/Collapse/Collapse.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import data from '../../assets/logements.json';
import './housing.scss';

import { useParams } from 'react-router-dom';



const Housing = () => {
  const { id } = useParams();

  // Utilisez l'ID pour obtenir les données spécifiques de votre fichier JSON
  const housingData = data.find(item => item.id === id);
  console.log("Pictures:", housingData.pictures);
  // Si le logement n'est pas trouvé, redirigez vers la page 404
  if (!housingData) {
    return <Navigate to="/404" />;
  }

  return (
    <main className='main__housing'>

      <Slideshow pictures={housingData.pictures} />

      <section className="section__housing">
        <div className="title__bar">
          <div className="title__box">
            <h2>{housingData.title}</h2>
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
        <p>{housingData.location}</p>

        <div className="tag__line">
          {housingData.tags.map(tag => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>

        <div>Rating: {housingData.rating}</div>
        <div className="collapse__housing">
          <Collapse title="Description">
            <p>{housingData.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {housingData.equipments.map(equipment => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  );
};

export default Housing;

// importations des dependances
import React from 'react';
import { Navigate , useParams } from 'react-router-dom';

import Collapse from '../../components/Collapse/Collapse.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import StarRating from '../../components/StarRating/StarRating.jsx';

// importations des fichiers annexes
import data from '../../assets/logements.json';


const Housing = () => {
  const { id } = useParams();

  // Utilisez l'ID pour obtenir les données spécifiques de votre fichier JSON
  const housingData = data.find(item => item.id === id);
  console.log("Pictures:", housingData.pictures);
  // Si le logement n'est pas trouvé, redirige vers la page 404
  if (!housingData) {
    return <Navigate to="*" />;
  }

  return (
    <main className='main__housing'>

    {/* importation du composant slideshow */}
      <Slideshow pictures={housingData.pictures} />

      <section className="section__housing">
        
        {/* div conteant : le titre, le sous-titre et les tags */}
        <div className="title__box">
          <h2>{housingData.title}</h2>
          <p>{housingData.location}</p>
          <div className="tag__box">
            
            <div className="tag__line">
              {housingData.tags.map(tag => (<div key={tag} className="tag">{tag}</div>))}
            </div> 
          </div>
        </div>

        {/* div contenant : la photo de profil, le nom et la notation */}
        <div className="host__container">
          <div className="host__bar">
            <div className="host__name">
              <p>{housingData.host.name}</p>
            </div>
            <div className="host__pictureprofile">
              <img src={housingData.host.picture} alt={housingData.host.name} />
            </div>
            </div>
            {/* importation du composant enfant starrating */}
            <StarRating rating={housingData.rating} />
        </div>

      </section>

      {/* double importation du composant enfant collapse */}
      <section className="collapse__housing">

        <Collapse 
          title="Description" 
          content={<p>{housingData.description}</p>}>
        </Collapse>

        <Collapse 
          title="Équipements" 
          content={<ul>{housingData.equipments.map(equipment => (<li key={equipment}>{equipment}</li>))}</ul>}>
        </Collapse>

        
      </section>
    </main>
  );
};

//exportation du composant
export default Housing;
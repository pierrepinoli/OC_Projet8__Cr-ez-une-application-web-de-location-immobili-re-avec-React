// import React from 'react';
// import Collapse from "../../components/Collapse/Collapse.jsx"
// import Slideshow from "../../components/Slideshow/Slideshow.jsx";
// import ExtractData from "../../components/ExtractData/ExtractData.jsx";
// import data from '../../assets/logements.json';
// import './housing.scss';

// import { useParams } from 'react-router-dom';


// const Housing = () => {
//   // Utilisez le hook useParams pour extraire l'ID de l'URL
//   const { id } = useParams();

//   // Utilisez l'ID pour obtenir les données spécifiques de votre fichier JSON
//   // Assurez-vous d'importer votre fichier JSON ou de passer les données en tant que prop
//   // Utilisez les données pour afficher les détails spécifiques de l'hébergement

//   return (

//     <main>
//               <div>
//       <h2>Housing Details</h2>
//       <p>ID: {id}</p>
//       {/* Affichez les détails spécifiques en utilisant les données */}
//     </div>
//             <Slideshow pictures={data} />
        
//             <section className="section__housing">
           
//                 <div className="title__bar">
//                     <div className="title__box">
//                         <h2>Nom du logement</h2>
//                     </div>
                   
//                     <div className="host__box">
//                         <div className="host__name">
//                             <p>Firt name</p>
//                             <p>Last name</p>
//                         </div>
//                         <div className="host__pictureprofile"></div>
//                     </div>
//                 </div>  
//                 <p>Lieu du logement</p>
                
//                 <div className="tag__line">
//                     <div className="tag">Cozy</div>
//                     <div className="tag">Canal</div>
//                     <div className="tag">Paris 10</div>
//                 </div>
                
//                 <div>Rating</div>
//                 <div className="collapse__housing">
//                     <Collapse title="Description">
//                         <p>Texte de la Description</p>
//                     </Collapse>
//                     <Collapse title="Équipements">
//                         <p>Texte des equipements.</p>
//                     </Collapse>
//                 </div>
                
//             </section>  


//         </main>
//     );
// };

// export default Housing;




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

  // Si le logement n'est pas trouvé, redirigez vers la page 404
  if (!housingData) {
    return <Navigate to="/404" />;
  }

  return (
    <main>
      <div>
        <h2>{housingData.title}</h2>
        <p>ID: {id}</p>
      </div>
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
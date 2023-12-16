// importations des dependances
import React from 'react';
import PropTypes from 'prop-types';

// importation des icones de Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


const StarRating = ({ rating }) => {
  // verifie si la note est comprise entre 1 et 5
  const clampedRating = Math.min(5, Math.max(1, rating));

  // Création d'un tableau de 5 étoiles avec des étoiles remplies ou vides en fonction de la note
  const stars = Array.from({ length: 5 }, (_, index) => index < clampedRating);

  return (
    <div className="starrating__box">
      {stars.map((isFilled, index) => (
        // importation des icones de Fontawesome
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          style={{
            width: '30px',
            height: '30px',
            color: isFilled ? '#FF6060' : '#E3E3E3',
         }}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

//exportation du composant
export default StarRating;
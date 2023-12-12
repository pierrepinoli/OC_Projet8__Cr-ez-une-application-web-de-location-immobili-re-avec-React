
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  // Assurez-vous que la note est comprise entre 1 et 5
  const clampedRating = Math.min(5, Math.max(1, rating));

  // Crée un tableau de 5 étoiles avec des étoiles remplies ou vides en fonction de la note
  const stars = Array.from({ length: 5 }, (_, index) => index < clampedRating);

  return (
    <div className="starrating__box">
      {stars.map((isFilled, index) => (
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

export default StarRating;
import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide}>Précédent</button>
      <div className="slide-container">
        {pictures.map((url, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
  

      <button onClick={nextSlide}>Suivant</button>
    </div>
  );
};


export default Slideshow;
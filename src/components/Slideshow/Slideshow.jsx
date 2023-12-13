// importations des fichiers annexes
// importations du css
// importations des dependances
import React, { useState  } from 'react';
import ArrowLeft from "../../assets/logo/chevron-left-solid.svg";
import ArrowRight from "../../assets/logo/chevron-right-solid.svg";

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  // const prevSlide = () => {
    
  //   setCurrentSlide(
  //     currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
  //     );
  // };

  // const nextSlide = () => {

  //   setCurrentSlide(
  //     currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
  //     );
  // };

  

  return (
    <div className="slideshow">
  
      <img className="arrow arrow__left" src={ArrowLeft} alt="Flèche gauche" onClick={prevSlide}/>
     

      <div className="slide-container">
      {pictures.map((url, index) => (
         <img key={index} src={url} alt={`Slide ${index + 1}`} className={`slide ${index === currentSlide ? 'active' : ''}`} />
                ))}
      </div>
      <img className="arrow arrow__right" src={ArrowRight} alt="Flèche droite" onClick={nextSlide}/>
   
    </div>
  );
};

//exportation du composant
export default Slideshow;


// importation des dependances
import React, { useState } from 'react';

// importation des icones de Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// definition du composant 
const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // établissement du DOM
  return (
    <div className="collapse__container">
    
      <div className="collapse__header">
        <span>{title}</span>
        <span>
          {/* appel des icônes de Fontawesome */}
          <FontAwesomeIcon
            onClick={toggleCollapse}
            icon={faChevronUp}
            // définition des classes CSS
            className={`chevron__icon ${isCollapsed ? 'chevron__rotate--close' : 'chevron__rotate--open'}` }
          />
        </span>
      </div>  
      <div className={`collapse__content ${isCollapsed ? 'collapse__content--reduce' : 'collapse__content--expand'}`}>
      
        <div className={`collapse__txt ${isCollapsed ? 'collapse__txt--reduce' : 'collapse__txt--expand'}`}>{content}</div>
      
      </div>
    </div>  
  );
};


// exportation du composant
export default Collapse;

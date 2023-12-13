// importation des dependances
import React, { useState } from 'react';

// importation des icones de Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

//importation du css
import './collapse.scss';


// definition du composant 
const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // etablissement du DOM
  return (
    <div className="collapse">
      <div className="collapse-header" >
        <span>{title}</span>
        <span>

          {/* appel des icones de fontawesome */}
          <FontAwesomeIcon onClick={toggleCollapse} icon={isCollapsed ? faChevronUp : faChevronUp} 
          
          // definiton des classes css//
                           className={`chevron__icon ${isCollapsed ? '' : 'rotate'}`}  />
        </span>
      </div>

      {!isCollapsed && <div className={`collapse-content ${isCollapsed ? '' : 'expand'}`}>{children}</div>}
      
    </div>
  );
};

// exportation du composant
export default Collapse;
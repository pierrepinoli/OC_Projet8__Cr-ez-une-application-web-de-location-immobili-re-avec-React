import './collapse.scss';
import React, { useState } from 'react';


const Collapse = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div className="collapse">
        <div className="collapse-header" onClick={toggleCollapse}>
          <span>{title}</span>
          <span>{isCollapsed ? '▼' : '▲'}</span>
        </div>
        {!isCollapsed && <div className="collapse-content">{children}</div>}
    </div>
    );
  };
  
  export default Collapse;
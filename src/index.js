// importation des dependances
import React from 'react';
import ReactDOM from 'react-dom/client';

// importation du css via SASS
import './SASS/index.scss';

// importation du composant APP
import App from './App';


import reportWebVitals from './reportWebVitals';

// établissement du lien avec le fichier HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* importation du composant principal App */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

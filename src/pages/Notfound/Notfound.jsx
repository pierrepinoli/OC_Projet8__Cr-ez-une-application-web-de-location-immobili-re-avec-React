// importations des dependances
import { NavLink } from "react-router-dom";

// importations du css
import './notfound.scss';


function Notfound () {
    return ( 
        <main className="notfound__main">
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <p className="navbar__links link__notfound"><NavLink to="/" >Accueil</NavLink></p>
        </main>
    )
}

//exportation du composant
export default Notfound;
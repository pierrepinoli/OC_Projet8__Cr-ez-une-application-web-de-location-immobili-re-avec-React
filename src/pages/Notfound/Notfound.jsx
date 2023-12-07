import './notfound.scss';
import { NavLink } from "react-router-dom";

function Notfound () {
    return ( 
        <main className="notfound__body">
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <p className="navbar__links link__notfound"><NavLink to="/" >Accueil</NavLink></p>
        </main>
    )
}

export default Notfound;
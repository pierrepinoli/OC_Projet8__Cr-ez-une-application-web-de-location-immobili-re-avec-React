// importations des dependances
import { NavLink } from "react-router-dom";

// importations des fichiers annexes
import logo from "../../assets/logo/logo-kasa.png";

// importations du css
import './header.scss';


function Header() {
    return (
        <header>
            <div className="navbar__box navbar__box--typography">
                <img className="logo--size" src={logo} alt="Logo Kasa" />
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={({isActive}) => (isActive ? "active" : "")}>A Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

//exportation du composant
export default Header;
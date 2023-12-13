import logo from "../../assets/logo/logo-kasa.png"
import './header.scss';

import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header>
            <div className="navbar__box navbar__box--typography">
                <img className="logo--size" src={logo} alt="Logo Kasa" />
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink exact to="/" className={({isActive}) => (isActive ? "active" : "")}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/About" className={({isActive}) => (isActive ? "active" : "")}>A Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
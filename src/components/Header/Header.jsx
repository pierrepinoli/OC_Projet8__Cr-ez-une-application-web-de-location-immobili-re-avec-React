import logo from "../../assets/logo/logo-kasa.png"
import './header.scss';

import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar__box navbar__box--typography">
                <img className="logo--size" src={logo} alt="Logo Kasa" />
                <ul>
                    <li className="navbar__links"><NavLink to="/" className={({ isActive, isPending, isTransitioning }) =>
                        [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : "", ].join(" ")
                        }>Accueil</NavLink></li>
                    <li className="navbar__links"><NavLink to="/About" className={({ isActive, isPending, isTransitioning }) =>
                        [isPending ? "pending" : "", isActive ? "active" : "", isTransitioning ? "transitioning" : "", ].join(" ")
                        }>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
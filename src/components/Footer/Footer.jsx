// importations des fichiers annexes
import logo from "../../assets/logo/logo-kasa-white.png"
import './footer.scss';

function Footer() {
    
   // établissement du DOM
    return (
        <footer>
        <div className="footer">
            <div className="footer__box">
                <img className="footer__logo--size footer__logo--color" src={logo} alt="Logo Kasa" />
                <p className="footer__copyright">© 2020 Kasa. All rights reserved</p> 
            </div>
        </div>
    </footer>
    )
}

//exportation du composant
export default Footer;
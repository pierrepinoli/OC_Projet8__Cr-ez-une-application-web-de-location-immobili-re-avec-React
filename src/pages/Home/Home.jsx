// importations des dependances
import Banner from "../../components/Banners/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";

// importations des fichiers annexes
import bannerpicPath from "../../assets/images/cliffs.png";

function Home () {
    
     // établissement du DOM
    return ( 
        <main className="main__home">
            <div className="banner__home">

                {/* importation de la bannière */}
                <Banner className="image--brightness" imageSrc={bannerpicPath} />
                {/* inclusion d'une balise <br/> pour gérer le retour à la ligne via le css et le responsive */}
                <h1>Chez vous, <br className="mobile-break"/> partout et ailleurs</h1>

            </div>
            <section>

                {/* importation du composant enfant Cards */}
               <Cards />
            </section>
        </main>
    )
};

//exportation du composant
export default Home;
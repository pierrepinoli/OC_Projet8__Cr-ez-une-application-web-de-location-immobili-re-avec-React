// importations des dependances
import Banner from "../../components/Banners/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";

// importations des fichiers annexes
import bannerpicPath from "../../assets/images/cliffs.png";

function Home () {
    return ( 
        <main className="main__home">
            <div className="banner__home">
                <Banner className="image--brightness" imageSrc={bannerpicPath} />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <section>
               <Cards />
            </section>
        </main>
    )
};

//exportation du composant
export default Home;
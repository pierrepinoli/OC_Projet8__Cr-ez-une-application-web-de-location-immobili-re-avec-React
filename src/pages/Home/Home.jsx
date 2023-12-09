import BannerHome from "../../components/Banners/BannerHome.jsx"
import Cards from "../../components/Cards/Cards.jsx"
import './home.scss';

function Home () {
    return ( 
        <main>
            <section>
                <div><BannerHome /></div>
            </section>
            <section>
                <div><Cards /></div>
            </section>
        </main>
    )
};

export default Home;
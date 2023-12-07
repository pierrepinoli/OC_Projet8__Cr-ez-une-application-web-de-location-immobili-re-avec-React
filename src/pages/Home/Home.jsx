import BannerHome from "../../components/Banners/BannerHome.jsx"
import Cards from "../../components/Cards/Cards.jsx"
import './home.scss';

function Home () {
    return ( 
        <main>
            <div><BannerHome /></div>
            <div><Cards /></div>
        </main>
    )
}

export default Home
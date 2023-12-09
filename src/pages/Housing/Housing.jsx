import Collapse from "../../components/Collapse/Collapse.jsx"
import './housing.scss';

function Housing () {
    return ( 
        <main>
            <section>
                <div>carrousel</div>
            </section>

            <section className="section__housing">
                
                <div className="title__bar">
                    <div className="title__box">
                        <h2>Nom du logement</h2>
                    </div>
                   
                    <div className="host__box">
                        <div className="host__name">
                            <p>Firt name</p>
                            <p>Last name</p>
                        </div>
                        <div className="host__pictureprofile"></div>
                    </div>
                </div>  
                <p>Lieu du logement</p>
                
                <div className="tag__line">
                    <div className="tag">Cozy</div>
                    <div className="tag">Canal</div>
                    <div className="tag">Paris 10</div>
                </div>
                
                <div>Rating</div>
                <div className="collapse__housing">
                    <Collapse title="Description">
                        <p>Texte de la Description</p>
                    </Collapse>
                    <Collapse title="Équipements">
                        <p>Texte des equipements.</p>
                    </Collapse>
                </div>
                
            </section>  


        </main>
    )
}

export default Housing
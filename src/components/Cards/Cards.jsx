import './cards.scss';
import data from '../../assets/logements.json';

function Cards() {
    return (
      
          <div>
            <div className="cards__grid"> 
            {data.map(item => (
              
              
              <div key={item.id} className="card">
                <div className="card__image" style={{ backgroundImage: `url(${item.cover})` }}></div>
                <div className="card__title">{item.title}</div>
              </div>
         
            
              ))}
                   </div>
          </div>
    
    )
};


export default Cards;
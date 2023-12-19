
//utilisation d'une props pour importer les bannieres dans le composant parent //
const Banner = (props) => {  
  return (
    <div className={`banner ${props.className}`}>
      <img className="image--size" src={props.imageSrc} alt="bannière" />
    </div>
  )
}

//exportation du composant
export default Banner;



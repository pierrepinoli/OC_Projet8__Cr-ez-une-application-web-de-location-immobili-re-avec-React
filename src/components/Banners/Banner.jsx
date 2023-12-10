import './banner.scss';

const Banner = (props) => {  
  return (
    <div className={`banner ${props.className}`}>
      <img className="image--size" src={props.imageSrc} alt="bannière" />
    </div>
  )
}

export default Banner;



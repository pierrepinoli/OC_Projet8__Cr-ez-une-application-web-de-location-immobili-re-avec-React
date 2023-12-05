import BannerPicture from "../../assets/images/cliffs.png"
import './banner.scss';

function Banner() {
  return (
    <div className="banner">
      <img className="image--size" src={BannerPicture} alt="bannières" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner;
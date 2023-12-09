import BannerPictureCliffs from "../../assets/images/cliffs.png"
import './banner.scss';

function BannerHome() {
  return (
    <div className="banner">
      <img className="image--size image--brigthness" src={BannerPictureCliffs} alt="bannières" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default BannerHome;
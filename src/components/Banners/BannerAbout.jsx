import BannerPictureMountains from "../../assets/images/mountains.png"
import './banner.scss';

function BannerAbout() {
  return (
    <div className="banner">
      <img className="image--size" src={BannerPictureMountains} alt="bannières" />
    </div>
  )
}

export default BannerAbout;
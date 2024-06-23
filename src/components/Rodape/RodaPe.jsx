import "./../../styles/components/cabecalho.sass";
import imageLogo from "./../../images/imageLogo.png";
import imageApple from "./../../images/apple_icon.png";
import imagePaly from "./../../images/playstore_icon.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsTwitch,
  BsYoutube,
} from "react-icons/bs";

function RodaPe() {
  return (
    <div className="rodaPe">
      <div className="firstDiv">
      <div className="group1">
        <div className="aplication">
          <img src={imageLogo} alt="imageLogo" className="imageLogo" id="imageLogo" />
          <div className="logo">
            <h2>APP Plants Info</h2>
            <span>Cuide da natureza</span>
          </div>
        </div>
        
      </div>
      <div className="group2">
        <div>
          <h3 className="estamosEm">Estamos onde tu estás.</h3>
          <div className="iconSocial">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
            <BsTwitch />
            <BsYoutube />
          </div>
        </div>
      </div>

      <div className="group">
          <div>
            <span>Descarregar na</span>
            <div className="plataforms">
              <img src={imageApple} alt="appleIcon" className="icons" />
              <div className="AppStory">
                <h3>App Story</h3>
              </div>
            </div>
          </div>

          <div>
          <span>Disponível no</span>
          <div className="plataforms">
            <img src={imagePaly} alt="GooglePalyIcon" className="icons" />
            <div className="AppStory">
              <h3>Google Play</h3>
            </div>
          </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default RodaPe;

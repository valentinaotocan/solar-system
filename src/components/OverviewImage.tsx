import { useLocation } from 'react-router-dom';
import mercury from "../assets/planet-mercury.png";
import venus from "../assets/planet-venus.png";
import earth from "../assets/planet-earth.png";
import mars from "../assets/planet-mars.png";
import jupiter from "../assets/planet-jupiter.png";
import saturn from "../assets/planet-saturn.png";
import uranus from "../assets/planet-uranus.png";
import neptune from "../assets/planet-neptune.png";

function OverviewImage() {
  const location = useLocation()
  
   const planetImages: Record<string, string> = {
     "/mercury": mercury,
     "/venus": venus,
     "/earth": earth,
     "/mars": mars,
     "/jupiter": jupiter,
     "/saturn": saturn,
     "/uranus": uranus,
     "/neptune": neptune,
   };

  if (location.pathname in planetImages) {
    const imageSrc = planetImages[location.pathname];
    return <img src={imageSrc} alt="Planet Image" />;
  }
}
export default OverviewImage
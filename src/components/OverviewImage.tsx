import { useLocation } from 'react-router-dom';
import { ReactComponent as Mercury } from "../assets/planet-mercury.svg";
import { ReactComponent as Venus } from "../assets/planet-venus.svg";
import { ReactComponent as Earth } from "../assets/planet-earth.svg";
import { ReactComponent as Mars} from "../assets/planet-mars.svg";
import { ReactComponent as Jupiter } from "../assets/planet-jupiter.svg";
import { ReactComponent as Saturn } from "../assets/planet-saturn.svg";
import { ReactComponent as Uranus } from "../assets/planet-uranus.svg";
import { ReactComponent as Neptune } from "../assets/planet-neptune.svg";

function OverviewImage() {
  const location = useLocation()
  
  if (location.pathname === '/mercury') {
    return <Mercury />
  }
  if (location.pathname === "/venus") {
    return <Venus />;
  }
  if (location.pathname === "/earth") {
    return <Earth />;
  }
  if (location.pathname === "/mars") {
    return <Mars />;
  }
  if (location.pathname === "/jupiter") {
    return <Jupiter />;
  }
  if (location.pathname === "/saturn") {
    return <Saturn />;
  }
  if (location.pathname === "/uranus") {
    return <Uranus />;
  }
  if (location.pathname === "/neptune") {
    return <Neptune />;
  }
  return null;
}
export default OverviewImage
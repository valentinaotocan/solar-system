import { useLocation } from "react-router-dom";
import { ReactComponent as Mercury } from "../assets/planet-mercury-internal.svg";
import { ReactComponent as Venus } from "../assets/planet-venus-internal.svg";
import { ReactComponent as Earth } from "../assets/planet-earth-internal.svg";
import { ReactComponent as Mars } from "../assets/planet-mars-internal.svg";
import { ReactComponent as Jupiter } from "../assets/planet-jupiter-internal.svg";
import { ReactComponent as Saturn } from "../assets/planet-saturn-internal.svg";
import { ReactComponent as Uranus } from "../assets/planet-uranus-internal.svg";
import { ReactComponent as Neptune } from "../assets/planet-neptune-internal.svg";

function InternalStructureImage() {
  const location = useLocation();

  if (location.pathname === "/mercury") {
    return <Mercury />;
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
export default InternalStructureImage;
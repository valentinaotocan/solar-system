import { useLocation } from "react-router-dom";
import { ReactComponent as Mercury } from "../assets/planet-mercury-internal.svg";
import { ReactComponent as Venus } from "../assets/planet-venus-internal.svg";
import { ReactComponent as Earth } from "../assets/planet-earth-internal.svg";
import { ReactComponent as Mars } from "../assets/planet-mars-internal.svg";
import { ReactComponent as Jupiter } from "../assets/planet-jupiter-internal.svg";
import { ReactComponent as Saturn } from "../assets/planet-saturn-internal.svg";
import { ReactComponent as Uranus } from "../assets/planet-uranus-internal.svg";
import { ReactComponent as Neptune } from "../assets/planet-neptune-internal.svg";

function StructureImage() {
  const location = useLocation();

 const planetComponents: Record<string, JSX.Element> = {
   "/mercury": <Mercury />,
   "/venus": <Venus />,
   "/earth": <Earth />,
   "/mars": <Mars />,
   "/jupiter": <Jupiter />,
   "/saturn": <Saturn />,
   "/uranus": <Uranus />,
   "/neptune": <Neptune />,
 };

 return planetComponents[location.pathname] || null;
}
export default StructureImage;

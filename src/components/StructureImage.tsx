import { useLocation } from "react-router-dom";
import mercury from "../assets/mercury-internal.png";
import venus from "../assets/venus-internal.png";
import earth from "../assets/earth-internal.png";
import mars from "../assets/mars-internal.png";
import jupiter from "../assets/jupiter-internal.png";
import saturn from "../assets/saturn-internal.png";
import uranus from "../assets/uranus-internal.png";
import neptune from "../assets/neptune-internal.png";

function StructureImage() {
  const location = useLocation();

  const planetComponents: Record<string, string> = {
    "/mercury": mercury,
    "/venus": venus,
    "/earth": earth,
    "/mars": mars,
    "/jupiter": jupiter,
    "/saturn": saturn,
    "/uranus": uranus,
    "/neptune": neptune,
  };

  const imageSrc = planetComponents[location.pathname];

  if (imageSrc === saturn) {
    return (
      <img
        src={saturn}
        alt="Planet Image"
        style={{
          position: "absolute",
          top: "70px",
          right: "87px",
        }}
      />
    );
  } else if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt="Planet Image"
        style={{
          position: "absolute",
          top: "5px",
          right: "4px",
        }}
      />
    );
  }
}
export default StructureImage;

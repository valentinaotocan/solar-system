import { useLocation } from "react-router-dom";
import mercury from "../assets/geology-mercury.png";
import venus from "../assets/geology-venus.png";
import earth from "../assets/geology-earth.png";
import mars from "../assets/geology-mars.png";
import jupiter from "../assets/geology-jupiter.png";
import saturn from "../assets/geology-saturn.png";
import uranus from "../assets/geology-uranus.png";
import neptune from "../assets/geology-neptune.png";

interface GeologyImageData {
  image: string;
  alt: string;
};

const planetImages: Record<string, GeologyImageData> = {
  "/mercury": { image: mercury, alt: "Geology Mercury" },
  "/venus": { image: venus, alt: "Geology Venus" },
  "/earth": { image: earth, alt: "Geology Earth" },
  "/mars": { image: mars, alt: "Geology Mars" },
  "/jupiter": { image: jupiter, alt: "Geology Jupiter" },
  "/saturn": { image: saturn, alt: "Geology Saturn" },
  "/uranus": { image: uranus, alt: "Geology Uranus" },
  "/neptune": { image: neptune, alt: "Geology Neptune" },
};

function GeologyImage() {
  const location = useLocation();
  const planetData = planetImages[location.pathname];

  if (planetData) {
    const { image, alt } = planetData;
    const imageStyle = {
      width: "10.1875rem",
      height: "12.4375rem",
    };

    return <img src={image} alt={alt} style={imageStyle}/>;
  }
  return null;
}

export default GeologyImage;

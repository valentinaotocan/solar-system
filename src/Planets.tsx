import { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconSource } from "./assets/icon-source.svg";
import OverviewImage from "./components/OverviewImage";
import StructureImage from "./components/StructureImage";
import GeologyImage from "./components/GeologyImage";
import PlanetText from "./components/PlanetText";
import data from "./data.json";

function Planets() {
  const [index, setIndex] = useState(1);
  const { planetId } = useParams();

  const planet = data.find((planet) => planet.name === planetId);

  if (!planet) {
    return <div>Planet doesn't exist!</div>;
  }

  const sourceMapping: {
    [key: number]: string;
  } = {
    1: planet.overview.source,
    2: planet.structure.source,
    3: planet.geology.source,
  };

  // Access the button background color for the current planet
  const buttonBackgroundColor = planet["btn-background"];
  // Access the source URL based on the index
  const sourceUrl = sourceMapping[index];

  return (
    <section className="planet">
      <div className="planet__main">
        <div className="planet__main__image">
          {index === 1 && <OverviewImage />}
          {index === 2 && (
            <div className="planet__main__image__internal">
              <OverviewImage />
              <StructureImage />
            </div>
          )}
          {index === 3 && (
            <div className="planet__main__image__geology">
              <OverviewImage />
              <div className="planet__main__image__geology__arrow">
                <GeologyImage />
              </div>
            </div>
          )}
        </div>
        <div className="planet__main__text">
          <div className="planet__main__text__facts">
            <h1 className="planet__main__text__facts__heading">
              {planet.name}
            </h1>
            {index === 1 && <PlanetText content={planet.overview.content} />}
            {index === 2 && <PlanetText content={planet.structure.content} />}
            {index === 3 && <PlanetText content={planet.geology.content} />}
            <div className="planet__main__text__facts__source">
              <span>Source : </span>
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                Wikipedia <IconSource className="icon-source" />
              </a>
            </div>
          </div>
          <div className="planet__main__text__buttons">
            <button
              onClick={() => setIndex(1)}
              style={{
                backgroundColor:
                  index === 1 ? buttonBackgroundColor : "transparent",
              }}
              className={index === 1 ? "active" : ""}
            >
              <span>01</span>Overview
            </button>
            <button
              onClick={() => setIndex(2)}
              className={index === 2 ? "active" : ""}
              style={{
                backgroundColor:
                  index === 2 ? buttonBackgroundColor : "transparent",
              }}
            >
              <span>02</span>Internal structure
            </button>
            <button
              onClick={() => setIndex(3)}
              className={index === 3 ? "active" : ""}
              style={{
                backgroundColor:
                  index === 3 ? buttonBackgroundColor : "transparent",
              }}
            >
              <span>03</span>Surface geology
            </button>
          </div>
        </div>
      </div>
      <div className="planet__information">
        <div className="planet__information__div">
          <h2>Rotation time</h2>
          <h3>{planet.rotation}</h3>
        </div>
        <div className="planet__information__div">
          <h2>Revolution time</h2>
          <h3>{planet.revolution}</h3>
        </div>
        <div className="planet__information__div">
          <h2>Radius time</h2>
          <h3>{planet.radius}</h3>
        </div>
        <div className="planet__information__div">
          <h2>Average temp.</h2>
          <h3>{planet.temperature}</h3>
        </div>
      </div>
    </section>
  );
}
export default Planets;

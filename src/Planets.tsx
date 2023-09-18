import { useParams } from "react-router-dom";
import { ReactComponent as IconSource } from "./assets/icon-source.svg";
import OverviewText from "./components/OverviewText";
import data from "./data.json";
import OverviewImage from "./components/OverviewImage";

function Planets() {
  const { planetId } = useParams();

  const planet = data.find((planet) => planet.name === planetId);

  if (!planet) {
    return <div>Planet doesn't exist!</div>;
  }

  return (
    <section className="planet">
      <div className="planet__main">
        <div className="planet__main__image">
          <OverviewImage />
        </div>
        <div className="planet__main__text">
          <h1 className="planet__main__text__heading">{planet.name}</h1>
          <OverviewText planet={planet} />
          <div className="planet__main__text__source">
            <span>Source : </span>
            <a
              href={planet.overview.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia <IconSource className="icon-source"/>
            </a>
          </div>
          <div className="planet__main__text__buttons">
            <button>
              <span>01</span>Overview
            </button>
            <button>
              <span>02</span>Internal structure
            </button>
            <button>
              <span>03</span>Surface geology
            </button>
          </div>
        </div>
      </div>
      <div className="planet__information">
        <div className="planet__information__div">
          <p>Rotation time</p>
          <h2>{planet.rotation}</h2>
        </div>
        <div className="planet__information__div">
          <p>Revolution time</p>
          <h2>{planet.revolution}</h2>
        </div>
        <div className="planet__information__div">
          <p>Radius time</p>
          <h2>{planet.radius}</h2>
        </div>
        <div className="planet__information__div">
          <p>Average temp.</p>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </section>
  );
}
export default Planets;

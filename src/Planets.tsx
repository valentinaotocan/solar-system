import { useParams } from "react-router-dom";
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
      <OverviewImage />
      <div>
        <h1>{planet.name}</h1>
        <OverviewText planet={planet} />
        <p>
          <a
            href={planet.overview.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source : Wikipedia
          </a>
        </p>
        <button>Overview</button>
        <button>Internal structure</button>
        <button>Surface geology</button>
      </div>
      <div className="planet__information">
        <div>
          <p>Rotation time</p>
          <h2>{planet.rotation}</h2>
        </div>
        <div>
          <p>Revolution time</p>
          <h2>{planet.revolution}</h2>
        </div>
        <div>
          <p>Radius time</p>
          <h2>{planet.radius}</h2>
        </div>
        <div>
          <p>Average temp.</p>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </section>
  );
}
export default Planets;

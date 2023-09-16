import { useParams } from "react-router-dom";
import OverviewText from "./components/OverviewText";
import data from "./data.json";
import OverviewImage from "./components/OverviewImage";

function Planets() {
  const { planetId } = useParams();

  const planet = data.find((planet) => planet.name === planetId);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <section>
      <OverviewImage />
      <div>
        <h1>{planet.name}</h1>
        <OverviewText planet={planet} />
        <p>
          <a href={planet.overview.source} target="_blank" rel="noopener noreferrer">
            Source : Wikipedia
          </a>
        </p>
      </div>
    </section>
  );
}
export default Planets;

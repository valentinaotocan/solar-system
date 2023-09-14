import { NavLink } from "react-router-dom";
import data from '../data.json';

function Navbar() {
  return (
    <div>
      {data.map((planet) => (
        <NavLink key={planet.name} to={planet.name}>
          {planet.name.toUpperCase()}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;

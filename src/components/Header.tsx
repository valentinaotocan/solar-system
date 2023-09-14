import { NavLink } from "react-router-dom";
import data from '../data.json';

function Header() {
  return (
    <header>
      <div className="logo">The planets</div>
      <nav>
        {data.map((planet) => (
          <NavLink key={planet.name} to={planet.name} className='link'>
            {planet.name.toUpperCase()}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
export default Header;

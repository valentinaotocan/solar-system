import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconChevron from "../assets/icon-chevron.svg";
import data from "../data.json";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="logo">The planets</div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img
            src={iconHamburger}
            alt="Icon Hamburger"
            style={{ opacity: 0.2487 }}
          />
        ) : (
          <img src={iconHamburger} alt="Icon Hamburger" />
        )}
      </div>
      {isOpen ? (
        <nav className="open">
          {data.map((planet) => (
            <Link
              key={planet.name}
              to={planet.name}
              className="link"
              data-planet={planet.name}
            >
              <div>
                <span
                  className="planet-circle"
                  style={{ backgroundColor: planet["btn-background"] }}
                ></span>
                <span className="link-text">{planet.name.toUpperCase()}</span>
              </div>
              <img src={iconChevron} alt="Icon Chevron" />
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="closed">
          {data.map((planet) => (
            <NavLink
              key={planet.name}
              to={planet.name}
              className="link closed"
              data-planet={planet.name}
            >
              {planet.name.toUpperCase()}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;

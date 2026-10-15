import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
          <li>
            <NavLink to="/cv">CV</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

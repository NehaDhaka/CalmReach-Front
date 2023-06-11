import "./Header.scss";
import logo from "../../assets/logos/logo.png";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo" />
        </Link>

        <Hamburger />

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/login" className="header__nav-link">
                Login
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/register"
                className="header__nav-link header__nav-link--cta"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

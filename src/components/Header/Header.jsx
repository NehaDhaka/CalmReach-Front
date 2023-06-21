import "./Header.scss";
import logo from "../../assets/logos/logo.png";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

export default function Header({ handleUserRegister, handleLoginModal }) {
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
              <a className="header__nav-link" onClick={handleLoginModal}>
                Login
              </a>
            </li>
            <li className="header__nav-item">
              <a
                onClick={handleUserRegister}
                className="header__nav-link header__nav-link--cta"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

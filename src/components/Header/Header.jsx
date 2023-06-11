import "./Header.scss";
import logo from "../../assets/logos/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Login
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link header__nav-link--cta">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

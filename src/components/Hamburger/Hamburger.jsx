import "./Hamburger.scss";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger `} onClick={handleClick}>
        <div
          className={`hamburger__line  hamburger__line--first ${
            isOpen ? "hamburger__line--first-open" : ""
          }`}
        ></div>
        <div
          className={`hamburger__line hamburger__line--second ${
            isOpen ? "hamburger__line--second-open" : ""
          }`}
        ></div>
        <div
          className={`hamburger__line  hamburger__line--third ${
            isOpen ? "hamburger__line--third-open" : ""
          }`}
        ></div>
      </div>
      <div
        className={`hamburger__menu-items ${isOpen ? "hamburger__open" : ""}`}
      >
        <ul className="hamburger__menu-list">
          <li className="hamburger__menu-item">
            <a className="hamburger__menu-link" href="/">
              Home
            </a>
          </li>
          <li className="hamburger__menu-item">
            <a className="hamburger__menu-link" href="/about">
              Login
            </a>
          </li>
          <li className="hamburger__menu-item">
            <a className="hamburger__menu-link" href="/contact">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

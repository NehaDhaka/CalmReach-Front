import { Link } from "react-router-dom";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Hamburger.scss";
import { IconContext } from "react-icons/lib";
export default function Hamburger({ handleUserRegister, handleLoginModal }) {
  const [sidebar, setSidebar] = useState(false);

  const showBar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#116a7b" }}>
        <div className="navbar">
          <Link to="#" className="navbar__menu-bars">
            <FaIcons.FaBars onClick={showBar} />
          </Link>
        </div>
        <nav className={sidebar ? "navbar__menu active" : "navbar__menu"}>
          <ul className="navbar__menu-items" onClick={showBar}>
            <li className="navbar__toggle">
              <Link
                to="#"
                className="navbar__menu-bars navbar__menu-bars--close"
              >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" onClick={handleLoginModal}>
                Login
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" onClick={handleUserRegister}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

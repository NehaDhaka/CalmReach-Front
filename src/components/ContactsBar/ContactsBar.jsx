import { Link } from "react-router-dom";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./ContactsBar.scss";
import { IconContext } from "react-icons/lib";
import contactImg from "../../assets/images/contact.png";
export default function ContactsBar({
  existingChats,
  currentUser,
  changeChat,
}) {
  const [sidebar, setSidebar] = useState(false);
  const [currentSelected, setCurrentSelected] = useState();
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  const showBar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#116a7b" }}>
        <div className="contact-bar">
          <Link to="#" className="contact-bar__menu-bars">
            <FaIcons.FaBars onClick={showBar} />
          </Link>
        </div>
        <nav
          className={sidebar ? "contact-bar__menu active" : "contact-bar__menu"}
        >
          <ul className="contact-bar__menu-items" onClick={showBar}>
            <li className="contact-bar__toggle">
              <Link
                to="#"
                className="contact-bar__menu-bars contact-bar__menu-bars--close"
              >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {existingChats.map((contact, index) => {
              return (
                <li
                  key={contact.id}
                  className={`contacts__item ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="contacts__item-img">
                    <img src={contactImg} alt="contact image" />
                  </div>
                  <div className="contacts__item-name">
                    <h3>{contact.name}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

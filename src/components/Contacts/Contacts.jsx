import { useState, useEffect } from "react";
import "./Contacts.scss";
import contactImg from "../../assets/images/contact.png";
import activeUserImg from "../../assets/images/active-user.png";
export default function ({ existingChats, currentUser, changeChat }) {
  const [currentSelected, setCurrentSelected] = useState();
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <div className="contacts">
      <div className="contacts__container">
        {existingChats.map((contact, index) => {
          return (
            <div
              key={contact._id}
              className={`contacts__item ${
                index === currentSelected ? "selected" : ""
              }`}
              onClick={() => changeCurrentChat(index, contact)}
            >
              <div className="contacts__item-img">
                <img src={contactImg} alt="" />
              </div>
              <div className="contacts__item-name">
                <h3>{contact.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="contacts__current-user">
        <div className="contacts__current-avatar">
          <img src={activeUserImg} alt="avatar" />
        </div>
        <div className="contacts__current-username">
          <h2>{currentUser.name}</h2>
        </div>
      </div>
    </div>
  );
}

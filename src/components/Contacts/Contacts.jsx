import { useState } from "react";
import "./Contacts.scss";
import contactImg from "../../assets/images/contact.png";
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

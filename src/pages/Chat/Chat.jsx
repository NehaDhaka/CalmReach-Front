import "./Chat.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Contacts from "../../components/Contacts/Contacts";
import Welcome from "../../components/Welcome/Welcome";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
export default function Chat() {
  const [currentUser, setCurrentUser] = useState();
  const [existingChats, setExistingChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/volunteerslist", {
        headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
      })
      .then((res) => {
        setExistingChats(res.data);
        axios
          .get("http://localhost:8080/api/user", {
            headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
          })
          .then((res) => {
            setCurrentUser(res.data);
          });
      });
  }, []);

  if (existingChats.length === 0 || !currentUser) {
    return <h1>Loading..</h1>;
  }
  console.log(currentUser);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <section className="chat">
      <div className="chat__container">
        <div className="chat__sub-container">
          <Contacts
            existingChats={existingChats}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {existingChats.length <= 0 || currentChat.length <= 0 ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatContainer
              currentChat={currentChat}
              currentUser={currentUser}
            />
          )}
        </div>
      </div>
    </section>
  );
}

import "./Chat.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Contacts from "../../components/Contacts/Contacts";
import Welcome from "../../components/Welcome/Welcome";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import { io } from "socket.io-client";
export default function Chat() {
  const socket = useRef();
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

  useEffect(() => {
    if (currentUser) {
      socket.current = io("http://localhost:8080");
      socket.current.emit("add-user", currentUser.id);
    }
  }, [currentUser]);

  if (existingChats.length === 0 || !currentUser) {
    return <h1>Loading..</h1>;
  }

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
              socket={socket}
            />
          )}
        </div>
      </div>
    </section>
  );
}

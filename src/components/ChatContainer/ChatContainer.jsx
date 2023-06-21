import userImg from "../../assets/images/contact.png";
import ChatInput from "../ChatInput/ChatInput";
import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ChatContainer.scss";

export default function ChatContainer({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/messages/getmsg", {
        from: currentUser.id,
        to: currentChat.id,
      })
      .then((response) => setMessages(response.data));
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post("http://localhost:8080/api/messages/addmsg", {
      from: currentUser.id,
      to: currentChat.id,
      message: msg,
    });
  };

  return (
    <div className="chat-container">
      <div className="chat-container__header">
        <div className="chat-container__user-details">
          <div className="chat-container__avatar">
            <img src={userImg} alt="" />
          </div>
          <div className="chat-container__username">
            <h3>{currentChat.name}</h3>
          </div>
        </div>
        {/* <Logout /> */}
      </div>
      <div className="chat-container__messages">
        {messages.map((message) => {
          console.log(message.fromSelf);
          return (
            <div key={uuidv4()}>
              <div
                className={`chat-container__message ${
                  message.fromSelf
                    ? "chat-container__sent"
                    : "chat-container__recieved"
                }`}
              >
                <div className="chat-container__content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}

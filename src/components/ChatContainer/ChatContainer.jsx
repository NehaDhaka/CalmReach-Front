import userImg from "../../assets/images/contact.png";
import ChatInput from "../ChatInput/ChatInput";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ChatContainer.scss";
import { sendMessageRoute, recieveMessageRoute } from "../../utils/apiRoutes";

export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    if (currentChat) {
      axios
        .post(recieveMessageRoute, {
          from: currentUser.id,
          to: currentChat.id,
        })
        .then((response) => setMessages(response.data));
    }
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser.id,
      to: currentChat.id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentChat.id,
      from: currentUser.id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        setArrivalMessage({
          fromSelf: false,
          message: msg,
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      </div>
      <div className="chat-container__messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
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

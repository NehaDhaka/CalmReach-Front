import "./Chat.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Contacts from "../../components/Contacts/Contacts";
import Welcome from "../../components/Welcome/Welcome";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import { io } from "socket.io-client";
import { userRoute } from "../../utils/apiRoutes";
import DotLoader from "react-spinners/ClipLoader";
import Footer from "../../components/Footer/Footer";
import LoggedHeader from "../../components/LoggedHeader/LoggedHeader";

export default function Chat() {
  const socket = useRef();
  const [isLoading, setIsLoading] = useState(true);
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
          .get(userRoute, {
            headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
          })
          .then((res) => {
            setCurrentUser(res.data);
            setIsLoading(false);
          });
      });
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(process.env.REACT_APP_BASE_URL);
      socket.current.emit("add-user", currentUser.id);
    }
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <LoggedHeader />
      {isLoading ? (
        <div className="loader-container">
          <DotLoader
            color={"#116a7b"}
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
      )}
      <Footer />
    </>
  );
}

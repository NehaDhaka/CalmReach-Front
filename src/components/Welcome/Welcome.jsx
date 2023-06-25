import "./Welcome.scss";
import { Link } from "react-router-dom";
import welcomeImg from "../../assets/images/welcome.png";
export default function Welcome({ currentUser, currentChat, existingChats }) {
  const name = currentUser.name.split(" ")[0];
  if (!existingChats) {
    return (
      <div className="welcome">
        <img src={welcomeImg} alt="" />
        <h1 className="welcome__title">
          Welcome, <span>{name}</span>
        </h1>
        <div className="welcome__description-container">
          {currentUser.user_role === "seeker" ? (
            <div className="welcome__description">
              <p>
                Select a volunteer from the the volunteer page to start
                conversation
              </p>
              <Link className="dashboard__button" to="/volunteers">
                View Volunteers
              </Link>
            </div>
          ) : (
            <p className="welcome__description">
              Please wait for a seeker to contact you
            </p>
          )}
        </div>
      </div>
    );
  } else if (!currentChat) {
    return (
      <div className="welcome">
        <img src={welcomeImg} alt="" />
        <h1 className="welcome__title">
          Welcome, <span>{name}</span>
        </h1>
        <p className="welcome__description">Please select a contact to chat</p>
      </div>
    );
  }
}

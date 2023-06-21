import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../../assets/images/dashboard_seeker.png";
import axios from "axios";
import "./Dashboard.scss";
import logo from "../../assets/logos/logo.png";

export default function Dashboard() {
  const [activeUser, setActiveUser] = useState();
  const randomNumber = Math.floor(Math.random() * (1642 + 1));

  let greeting;
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.authToken) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user", {
        headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
      })
      .then((res) => {
        setActiveUser(res.data);
        axios
          .get("https://type.fit/api/quotes")
          .then((res) => console.log(res.data[randomNumber]));
      })
      .catch((error) => console.log(error));
  }, []);

  if (!activeUser) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="dashboard">
      <header className="dashboard__header">
        <img
          className="dashboard__header-logo"
          src={logo}
          alt="CalmReach logo"
        />
        <ion-icon
          className="dashboard__header-icon"
          name="log-out-outline"
        ></ion-icon>
      </header>
      <div className="dashboard__container">
        <h1>
          {greeting}, {activeUser.name}!
        </h1>
        <div className="dashboard__quote-container"></div>
        <img src={img1} alt="" />
        <Link to="/conversations">Conversations</Link>
        {activeUser.user_role === "seeker" && (
          <Link to="/volunteers">View Volunteers</Link>
        )}
      </div>
    </section>
  );
}

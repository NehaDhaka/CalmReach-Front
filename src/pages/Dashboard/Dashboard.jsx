import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import seekerImg from "../../assets/images/dashboard_seeker.png";
import volunteerImg from "../../assets/images/dashboard_volunteer.png";
import DotLoader from "react-spinners/ClipLoader";
import axios from "axios";
import "./Dashboard.scss";
import { userRoute } from "../../utils/apiRoutes";
import LoggedHeader from "../../components/LoggedHeader/LoggedHeader";
import Footer from "../../components/Footer/Footer";
export default function Dashboard() {
  const [activeUser, setActiveUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState();
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
      .get(userRoute, {
        headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
      })
      .then((res) => {
        setActiveUser(res.data);
        axios.get("https://type.fit/api/quotes").then((res) => {
          setQuote(res.data[randomNumber]);
          setIsLoading(false);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
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
        <>
          <LoggedHeader />
          <section className="dashboard">
            <div className="dashboard__container">
              <div className="dashboard__sub-container">
                <div className="dashboard__text-container">
                  <h1 className="dashboard__greeting">
                    {greeting}, {activeUser.name.split(" ")[0]}!
                  </h1>
                  <div className="dashboard__quote-container">
                    <p className="dashboard__quote">"{quote.text}"</p>
                    <p className="dashboard__quote-author">-{quote.author}</p>
                  </div>
                </div>

                <img
                  className="dashboard__img"
                  src={
                    activeUser.user_role === "seeker" ? seekerImg : volunteerImg
                  }
                  alt="A girl coming out of a cage"
                />
              </div>

              <div className="dashboard__button-container">
                <Link className="dashboard__button" to="/conversations">
                  Conversations
                </Link>
                {activeUser.user_role === "seeker" && (
                  <Link className="dashboard__button" to="/volunteers">
                    View Volunteers
                  </Link>
                )}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

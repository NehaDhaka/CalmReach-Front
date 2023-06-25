import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  userRoute,
  volunteersRoute,
  addContactRoute,
} from "../../utils/apiRoutes";
import LoggedHeader from "../../components/LoggedHeader/LoggedHeader";
import DotLoader from "react-spinners/ClipLoader";
import "./Volunteers.scss";
import volunteerImg from "../../assets/images/volunteer_list.png";
import volunteerCard from "../../assets/images/volunteer_card.png";
import Footer from "../../components/Footer/Footer";

export default function Volunteers() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [volunteerList, setVolunteerList] = useState();

  useEffect(() => {
    if (!sessionStorage.authToken) {
      navigate("/");
    } else if (sessionStorage.authToken) {
      axios
        .get(userRoute, {
          headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
        })
        .then((response) => {
          console.log(response);
          if (response.data.user_role === "volunteer") {
            navigate("/dashboard");
          } else {
            setCurrentUser(response.data);
            axios
              .get(volunteersRoute, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.authToken}`,
                },
              })
              .then((response) => {
                console.log(response);
                setVolunteerList(response.data);
                setIsLoading(false);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleOnClick = (volunteerId) => {
    axios
      .post(
        addContactRoute,
        {
          seeker: currentUser.id,
          volunteer: volunteerId,
        },
        {
          headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
        }
      )
      .then(navigate("/conversations"));
  };

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
          <section className="volunteers">
            <div className="volunteers__container">
              <div className="volunteers__sub-container">
                <div className="volunteers__text-container">
                  <h1 className="volunteers__title">Support Tailored to You</h1>
                  <div className="volunteers__detail-container">
                    <div className="volunteers__detail-line"></div>
                    <p className="volunteers__detail">
                      Experience the power of personalized support on your
                      mental health journey. Our carefully selected volunteers
                      are here to provide understanding and guidance that aligns
                      with your unique needs. Connect with compassionate
                      individuals who are ready to make a meaningful difference
                      in your life.
                    </p>
                  </div>
                </div>
                <img
                  src={volunteerImg}
                  className="volunteers__intro-img"
                  alt="2 girls talking to each other sitting on a couch"
                />
              </div>
              <ul className="volunteers__list">
                {volunteerList.map((volunteer) => (
                  <li
                    onClick={() => {
                      handleOnClick(volunteer.id);
                    }}
                    key={volunteer.id}
                    className="volunteers__item "
                  >
                    <img
                      className="volunteers__item-img"
                      src={volunteerCard}
                      alt="volunteer image"
                    />
                    <div className="volunteers__info">
                      <h2 className="volunteers__name">{volunteer.name}</h2>
                      <ion-icon name="chatbox-outline"></ion-icon>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

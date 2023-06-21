import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Volunteers() {
  const navigate = useNavigate();
  const [volunteerList, setVolunteerList] = useState();
  useEffect(() => {
    if (!sessionStorage.authToken) {
      navigate("/");
    } else if (sessionStorage.authToken) {
      axios
        .get("http://localhost:8080/api/user", {
          headers: { Authorization: `Bearer ${sessionStorage.authToken}` },
        })
        .then((response) => {
          if (response.data.user_role === "volunteer") {
            navigate("/dashboard");
          } else {
            axios
              .get("http://localhost:8080/api/volunteers", {
                headers: {
                  Authorization: `Bearer ${sessionStorage.authToken}`,
                },
              })
              .then((response) => setVolunteerList(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (!volunteerList) {
    return <h1>Loading..</h1>;
  }
  console.log(volunteerList);
  return (
    <section className="volunteers">
      <h1 className="volunteers__title">Volunteer List</h1>
      <ul className="volunteers__list">
        {volunteerList.map((volunteer) => (
          <li key={volunteer.id} className="volunteers__item">
            <div className="volunteers__info">
              <h2 className="volunteers__name">{volunteer.name}</h2>
              <p className="volunteers__tag">{volunteer.tag}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

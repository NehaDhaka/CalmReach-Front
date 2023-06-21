import "./RegisterModalVolunteer.scss";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RegisterModalUser({ isVolunteerOpen, onClose }) {
  const params = useParams();
  const navigate = useNavigate();
  const tagsOptions = [
    "Stress Management",
    "Relationship Issues",
    "Self-Esteem and Confidence",
    "Coping with Grief and Loss",
    "Anger Management",
    "Mindfulness and Meditation",
    "Life Transitions",
    "Work-Life Balance",
    "Parenting Support",
    "LGBTQ+ Support",
    "Substance Abuse Recovery",
    "Body Image and Eating Disorders",
    "Trauma and PTSD",
    "Social Anxiety",
    "Career Guidance",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tagOption: tagsOptions[0],
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    const { name, email, password } = formData;
    if (!name) {
      toast.error("Name field can not be empty", toastOptions);
      return false;
    } else if (!email) {
      toast.error("Email field can not be empty", toastOptions);
      return false;
    } else if (!password) {
      toast.error("Password field can not be empty", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password length should be greater than or equal to 8 characters",
        toastOptions
      );
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const {
        name: inputName,
        email: inputEmail,
        password,
        tagOption,
      } = formData;
      const words = inputName.split(" ");
      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      const email = inputEmail.toLowerCase();

      const name = capitalizedWords.join(" ");
      axios
        .post("http://localhost:8080/api/register", {
          name,
          email,
          password,
          tagOption,
          userRole: "volunteer",
        })
        .then((response) => {
          if (response.data.status === false) {
            toast.error(response.data.message, toastOptions);
          } else {
            sessionStorage.authToken = response.data.userData.token;

            navigate(`/dashboard`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Modal
        isOpen={isVolunteerOpen}
        onClose={onClose}
        title="Register as a Mental Health Hero"
      >
        <div className="register-volunteer">
          <p className="register-volunteer__description">
            Join us today and become a part of our network of volunteers who are
            dedicated to creating a supportive environment. Together, let's make
            a difference in the lives of those seeking help and support.
          </p>
          <form
            className="register-volunteer__form"
            onSubmit={handleFormSubmit}
          >
            <input
              className="register-volunteer__input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className="register-volunteer__input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <input
              className="register-volunteer__input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="register-volunteer__field">
              <label className="register-volunteer__label" htmlFor="tag">
                Choose Topic You Can Support With
              </label>
              <select
                name="tagOption"
                id="tag"
                className="register-volunteer__input register-volunteer__input--select"
                value={formData.tagOption}
                onChange={handleInputChange}
              >
                {tagsOptions.map((tag, index) => (
                  <option key={index + 1} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            <button className="register-volunteer__button" type="submit">
              Register
            </button>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
}

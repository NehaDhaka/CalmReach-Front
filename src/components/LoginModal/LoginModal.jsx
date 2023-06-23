import "./LoginModal.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleInputChange, toastOptions } from "../../utils/registration";
import { loginRoute } from "../../utils/apiRoutes";

export default function LoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleValidation = () => {
    const { email, password } = formData;
    if (!email) {
      toast.error("Email field can not be empty", toastOptions);
      return false;
    } else if (!password) {
      toast.error("Password field can not be empty", toastOptions);
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, password } = formData;

      axios
        .post(loginRoute, {
          email,
          password,
        })
        .then((response) => {
          if (response.data.status === false) {
            toast.error(response.data.message, toastOptions);
          } else {
            sessionStorage.authToken = response.data.token;
            navigate("/dashboard");
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
        isOpen={isOpen}
        onClose={onClose}
        title="Unlock a Supportive Community"
      >
        <div className="register">
          <p className="register__description">
            Register and connect with compassionate individuals who understand
            and care about your mental health journey. Together, we can navigate
            challenges, share insights, and inspire positive change. Join us
            today!
          </p>
          <form className="register__form" onSubmit={handleFormSubmit}>
            <input
              className="register__input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(event) => {
                handleInputChange(event, setFormData);
              }}
            />
            <input
              className="register__input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(event) => {
                handleInputChange(event, setFormData);
              }}
            />

            <button className="register__button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
}

import "./RegisterModalUser.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  tagsOptions,
  handleInputChange,
  handleFormSubmit,
} from "../../utils/registration";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function RegisterModalUser({ isUserOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tagOption: tagsOptions[0],
  });

  return (
    <>
      <Modal
        isOpen={isUserOpen}
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
          <form
            className="register__form"
            onSubmit={(event) =>
              handleFormSubmit(event, "seeker", navigate, formData)
            }
          >
            <input
              className="register__input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(event) => {
                handleInputChange(event, setFormData);
              }}
            />
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
            <div className="register__field">
              <label className="register__label" htmlFor="tag">
                Select Topic You Need Help With
              </label>
              <select
                name="tagOption"
                id="tag"
                className="register__input register__input--select"
                value={formData.tagOption}
                onChange={(event) => {
                  handleInputChange(event, setFormData);
                }}
              >
                {tagsOptions.map((tag, index) => (
                  <option key={uuidv4()} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            <button className="register__button" type="submit">
              Register
            </button>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
}

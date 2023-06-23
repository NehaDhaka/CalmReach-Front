import "./RegisterModalVolunteer.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

import {
  tagsOptions,
  handleInputChange,
  handleFormSubmit,
} from "../../utils/registration";
import { useNavigate } from "react-router-dom";

export default function RegisterModalUser({ isVolunteerOpen, onClose }) {
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
        isOpen={isVolunteerOpen}
        onClose={onClose}
        title="Register as a Mental Health Hero"
      >
        <div className="register">
          <p className="register__description">
            Join us today and become a part of our network of volunteers who are
            dedicated to creating a supportive environment. Together, let's make
            a difference in the lives of those seeking help and support.
          </p>
          <form
            className="register__form"
            onSubmit={(event) => {
              handleFormSubmit(event, "volunteer", navigate, formData);
            }}
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
              <label className="register-volunteer__label" htmlFor="tag">
                Choose Topic You Can Support With
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

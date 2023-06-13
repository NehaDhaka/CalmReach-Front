import "./RegisterModalVolunteer.scss";
import Modal from "../Modal/Modal";

export default function RegisterModalUser({ isOpen, onClose }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Register as a Mental Health Hero"
    >
      <div className="register-volunteer">
        <p className="register-volunteer__description">
          Join us today and become a part of our network of volunteers who are
          dedicated to creating a supportive environment. Together, let's make a
          difference in the lives of those seeking help and support.
        </p>
        <form className="register-volunteer__form" onSubmit={handleFormSubmit}>
          <input
            className="register-volunteer__input"
            type="text"
            placeholder="Name"
          />
          <input
            className="register-volunteer__input"
            type="email"
            placeholder="Email"
          />

          <input
            className="register-volunteer__input"
            type="password"
            placeholder="Password"
          />
          <button className="register-volunteer__button" type="submit">
            Register
          </button>
        </form>
      </div>
    </Modal>
  );
}

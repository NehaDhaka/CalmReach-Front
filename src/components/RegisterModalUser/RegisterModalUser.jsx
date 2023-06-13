import "./RegisterModalUser.scss";
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
      title="Unlock a Supportive Community"
    >
      <div className="register">
        <p className="register__description">
          Register and connect with compassionate individuals who understand and
          care about your mental health journey. Together, we can navigate
          challenges, share insights, and inspire positive change. Join us
          today!
        </p>
        <form className="register__form" onSubmit={handleFormSubmit}>
          <input className="register__input" type="text" placeholder="Name" />
          <input className="register__input" type="email" placeholder="Email" />

          <input
            className="register__input"
            type="password"
            placeholder="Password"
          />
          <button className="register__button" type="submit">
            Register
          </button>
        </form>
      </div>
    </Modal>
  );
}

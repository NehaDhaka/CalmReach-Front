import logo from "../../assets/logos/logo.png";
import "./LoggedHeader.scss";
import { Link, useNavigate } from "react-router-dom";
export default function LoggedHeader() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    sessionStorage.removeItem("authToken");
    window.location.href = "/"; // Replace '/login' with the desired URL
  };
  return (
    <header className="logged-header">
      <Link to="/dashboard" className="header__logo">
        <img src={logo} alt="Logo" />
      </Link>
      <Link className="logged-header__icon">
        <ion-icon onClick={handleOnClick} name="log-out-outline"></ion-icon>
      </Link>
    </header>
  );
}

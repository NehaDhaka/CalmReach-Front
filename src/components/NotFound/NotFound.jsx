import "./NotFound.scss";
import notFoundimg from "../../assets/images/not_found.png";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="not-found">
      <img src={notFoundimg} alt="" />
      <h1>404 Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link className="dashboard__button" to="/">
        Home
      </Link>
    </section>
  );
}

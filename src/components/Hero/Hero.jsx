import "./Hero.scss";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text-content">
            <h1 className="hero__title">Connecting Mental Health Warriors</h1>
            <p className="hero__text">
              Join our caring community, where volunteers provide a helping hand
              and a listening ear for those navigating mental health challenges.
              You're not alone on this journey towards healing and resilience.
            </p>
          </div>
          <Link to="/register" className="hero__button">
            Get Started
          </Link>
        </div>
        <img
          className="hero__img"
          src={hero}
          alt="A man putting a plan in an imaginary mind (Image by pikisuperstar on Freepik)"
        />
      </div>
    </section>
  );
}

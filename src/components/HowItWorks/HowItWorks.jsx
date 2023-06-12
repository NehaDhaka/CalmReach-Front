import "./HowItWorks.scss";
import how3 from "../../assets/images/how-3.png";
import how1 from "../../assets/images/how-1.png";
import how2 from "../../assets/images/how-2.png";
import how4 from "../../assets/images/how-4.png";

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__container">
        <h2 className="how__title">Getting help is easy...</h2>
        <div className="how__box-container">
          <div className="how__box how__box--first">
            <div className="how__box-text">
              <h4 className="how__subtitle">Sign up</h4>
              <p className="how__text">
                Start by creating an account to join our supportive community.
              </p>
            </div>
            <img
              src={how1}
              alt="Person creating account  (Image by pikisuperstar on Freepik)"
            />
          </div>
          <div className="how__box how__box--second">
            <div className="how__box-text">
              <h4 className="how__subtitle">Discover Volunteers</h4>
              <p className="how__text">
                Explore a curated list of dedicated volunteers who are ready to
                help. We match you with those best suited to support your
                specific needs.
              </p>
            </div>
            <img
              src={how2}
              alt="Person looking through options on his phone  (Image by pikisuperstar on Freepik)"
            />
          </div>
          <div className="how__box how__box--third">
            <div className="how__box-text">
              <h4 className="how__subtitle">Reach Out</h4>
              <p className="how__text">
                Once you've found a volunteer you resonate with, simply reach
                out to them. They are here to provide a listening ear,
                understanding, and guidance tailored to your unique situation.
              </p>
            </div>
            <img
              src={how3}
              alt="A girl looking at her phone (Image by pikisuperstar on Freepik)"
            />
          </div>
        </div>
        <div className="how__intro">
          <div className="how__text-content">
            <p className="how__content-heading">
              Accessible Support for Your Mental Health Journey
            </p>
            <p className="how__content-description">
              Join us today to discover how simple it can be to connect with a
              dedicated volunteer who genuinely cares about your well-being.
              Take the first step towards receiving the compassionate help you
              deserve.
            </p>
          </div>

          <img
            src={how4}
            alt="A person giving another person a flower through the phone (Image by pikisuperstar on Freepik)"
          />
        </div>
      </div>
    </section>
  );
}

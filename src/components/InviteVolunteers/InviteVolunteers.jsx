import "./InviteVolunteers.scss";
import volunteer from "../../assets/images/invite-volunteers.png";
import { Link } from "react-router-dom";

export default function InviteVolunteers() {
  return (
    <section className="invite-volunteers">
      <div className="invite-volunteers__container">
        <div className="invite-volunteers__content">
          <img
            className="invite-volunteers__img"
            src={volunteer}
            alt="A girl holding a bag in her hand. Her shadow on the wall has a cape on. (Image by pikisuperstar on Freepik)"
          />
          <div className="invite-volunteers__text-container">
            <h1 className="invite-volunteers__title">
              Mental Health Heroes Wanted!
            </h1>

            <p className="invite-volunteers__description">
              Join our team of mental health heroes and use your superpower of
              compassion to brighten someone's day. No capes required, just a
              big heart and a desire to make a positive difference. Together,
              let's bring laughter, kindness, and support to those who need it
              most.
            </p>
          </div>
        </div>
        <Link className="invite-volunteers__button">Become a Volunteer</Link>
      </div>
    </section>
  );
}

import "./Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import InviteVolunteers from "../../components/InviteVolunteers/InviteVolunteers";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <InviteVolunteers />
    </>
  );
}

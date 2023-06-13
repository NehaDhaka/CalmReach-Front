import "./Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import InviteVolunteers from "../../components/InviteVolunteers/InviteVolunteers";
import Footer from "../../components/Footer/Footer";
import RegisterModalUser from "../../components/RegisterModalUser/RegisterModalUser";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleUserRegister = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header handleUserRegister={handleUserRegister} />
      <Hero />
      <HowItWorks />
      <InviteVolunteers />
      <Footer />
      <RegisterModalUser isOpen={isOpen} onClose={handleModalClose} />
    </>
  );
}

import "./Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import InviteVolunteers from "../../components/InviteVolunteers/InviteVolunteers";
import Footer from "../../components/Footer/Footer";
import RegisterModalUser from "../../components/RegisterModalUser/RegisterModalUser";
import RegisterModalVolunteer from "../../components/RegisterModalVolunteer/RegisterModalVolunteer";
import LoginModal from "../../components/LoginModal/LoginModal";

import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  const handleUserRegister = () => {
    setIsUserOpen(true);
  };

  const handleVolunteerRegister = () => {
    setIsVolunteerOpen(true);
  };

  const handleUserModalClose = () => {
    setIsUserOpen(false);
  };

  const handleVolunteerModalClose = () => {
    setIsVolunteerOpen(false);
  };

  const handleLoginModal = () => {
    setIsOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header
        handleUserRegister={handleUserRegister}
        handleLoginModal={handleLoginModal}
      />
      <Hero handleUserRegister={handleUserRegister} />
      <HowItWorks />
      <InviteVolunteers handleVolunteerRegister={handleVolunteerRegister} />
      <Footer />
      <RegisterModalUser
        isUserOpen={isUserOpen}
        onClose={handleUserModalClose}
      />
      <RegisterModalVolunteer
        isVolunteerOpen={isVolunteerOpen}
        onClose={handleVolunteerModalClose}
      />
      <LoginModal isOpen={isOpen} onClose={handleLoginModalClose} />
    </>
  );
}

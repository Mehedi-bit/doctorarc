import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner.js";
import CareCard from "./CareCard.js";
import Contact from "./Contact.js";
import Info from "./Info.js";
import MakeAppointment from "./MakeAppointment.js";
import Services from "./Services.js";
import Testimonials from "./Testimonials.js";

const Home = () => {
  return (
    <div>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <CareCard></CareCard>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

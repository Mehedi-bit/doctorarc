import React from "react";
import Banner from "./Banner.js";
import CareCard from "./CareCard.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Info from "./Info.js";
import MakeAppointment from "./MakeAppointment.js";
import Services from "./Services.js";
import Testimonials from "./Testimonials.js";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <CareCard></CareCard>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

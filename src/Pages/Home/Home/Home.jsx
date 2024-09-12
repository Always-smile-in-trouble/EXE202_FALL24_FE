import React from "react";
import Banner from "../Banner/Banner/Banner";
// import SportsProgrammes from "../SportsProgrammes/SportsProgrammes";
// import Facilities from "../Facilities/Facilities";
import Instructors from "../Instructors/Instructors";
import AboutUs from "../AboutUs/AboutUs";
import ScrollUp from "../../../Components/ScrollUp/ScrollUp";
import Testimonials from "../Testimonials/Testimonials";
import ContactUs from "../ContactUs/ContactUs";
import QuickContact from "../QuickContact/QuickContact";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <SportsProgrammes/>
            <Facilities/> */}
      <Instructors />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <QuickContact />
      <ScrollUp />
    </div>
  );
};

export default Home;

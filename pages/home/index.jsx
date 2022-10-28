import React from "react";
import About from "../../components/about/About";
import Input from "../../components/input/Input";
import Campaigns from "../../components/campaign/Campaigns";
import MenuWrapper from "../../components/menu/MenuWrapper";
import Carousel from "../../components/ui/Carousel";
import Booking from "../../components/booking/Booking";
import Feedback from "../../components/feedback/Feedback";

const Index = () => {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Booking />
      <Feedback />
    </>
  );
};

export default Index;

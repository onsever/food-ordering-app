import React from "react";
import About from "../../components/about/About";
import Input from "../../components/input/Input";
import Campaigns from "../../components/campaign/Campaigns";
import MenuWrapper from "../../components/menu/MenuWrapper";
import Carousel from "../../components/ui/Carousel";
import Booking from "../../components/booking/Booking";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Booking />
    </div>
  );
};

export default Index;

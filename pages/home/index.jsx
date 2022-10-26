import React from "react";
import About from "../../components/about/About";
import Campaigns from "../../components/layout/Campaigns";
import MenuWrapper from "../../components/menu/MenuWrapper";
import Carousel from "../../components/ui/Carousel";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  );
};

export default Index;

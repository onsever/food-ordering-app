import React from "react";
import Campaigns from "../../components/layout/Campaigns";
import MenuWrapper from "../../components/menu/MenuWrapper";
import Carousel from "../../components/ui/Carousel";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
};

export default Index;

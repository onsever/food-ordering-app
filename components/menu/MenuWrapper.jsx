import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16" id="menu">
      <div className="flex flex-col items-center">
        <Title className="text-[3rem]">Our Menu</Title>
      </div>
      <div className="flex mt-10 items-center justify-center">
        <button className="bg-secondary px-6 py-2 rounded-3xl text-white">
          All
        </button>
        <button className="px-6 py-2 rounded-3xl">Burger</button>
        <button className="px-6 py-2 rounded-3xl">Pizza</button>
        <button className="px-6 py-2 rounded-3xl">Drink</button>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;

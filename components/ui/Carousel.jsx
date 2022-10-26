import Image from "next/image";
import React from "react";
import Title from "./Title";

const Carousel = () => {
  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative container mx-auto text-white top-48 flex flex-col items-start gap-y-10">
        <Title className="text-6xl">Fast Food Restaurant</Title>
        <p className="text-sm w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, modi,
          recusandae blanditiis voluptas, sed ipsum magni deleniti cum incidunt
          soluta velit quod ratione fuga temporibus eligendi delectus atque
          laudantium impedit.
        </p>
        <button className="btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;

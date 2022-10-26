import Image from "next/image";
import React from "react";
import Title from "./Title";
import Slider from "react-slick";
import { carouselData } from "../../public/data/data";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => {
      return (
        <div>
          <ul>{dots}</ul>
        </div>
      );
    },
    customPaging: (i) => {
      return <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>;
    },
  };

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
      <Slider {...settings}>
        {carouselData.map((data, index) => {
          return (
            <div key={index}>
              <div className="mt-48 container mx-auto text-white flex flex-col items-start gap-y-10">
                <Title className="text-6xl">{data.title}</Title>
                <p className="text-sm w-1/2">{data.description}</p>
                <button className="btn-primary">Order Now</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

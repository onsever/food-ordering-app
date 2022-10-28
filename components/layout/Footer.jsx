import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title className="text-3xl">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">
                  Call +1 (647) 450-7913
                </span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">onsever@icloud.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title className="text-4xl">FoodLog</Title>
            <p className="mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              praesentium optio corporis et ex enim!
            </p>
          </div>
          <div className="md:flex-1">
            <Title className="text-3xl">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">08:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          &copy; Copyright 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

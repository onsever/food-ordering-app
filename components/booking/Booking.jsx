import React from "react";
import Input from "../input/Input";
import Title from "../ui/Title";
import { inputs } from "../../public/data/inputs";

const Booking = () => {
  return (
    <div className="container mx-auto py-12">
      <Title className="text-[2.5rem] mb-4">Book A Table</Title>
      <div className="flex justify-between gap-10 flex-wrap-reverse">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-5">
            {inputs.map((input) => {
              return <Input key={input.id} {...input} />;
            })}
          </div>
          <button className="btn-primary uppercase mt-4">Book Now</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.998134404222!2d-79.35083664791239!3d43.68980217901776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc9230ae2ef5%3A0x46f82322b811f407!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1666892909672!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full overflow-hidden"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Booking;

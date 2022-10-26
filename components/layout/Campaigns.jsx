import Image from "next/image";
import React from "react";
import { campaignData } from "../../public/data/data";
import Title from "../ui/Title";

const CampaignItem = ({ image, title, discount, onClick }) => {
  return (
    <div className="flex-1 bg-secondary rounded-md py-5 px-4 text-white flex items-center">
      <div className="relative w-40 h-40 rounded-full border-[5px] border-primary overflow-hidden">
        <Image
          src={image}
          alt="Campaign Image"
          layout="fill"
          className="object-cover rounded-full hover:scale-110 transition-all"
        />
      </div>
      <div className="text-white ml-3 flex flex-col items-start justify-center gap-y-3">
        <Title className="text-2xl font-dancing">{title}</Title>
        <Title className="text-4xl font-dancing after:content-['Off'] after:text-lg after:ml-1">
          {discount}%
        </Title>
        <button className="btn-primary" onClick={onClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex container mx-auto pt-11 pb-[5.5rem] justify-between gap-x-3 flex-wrap gap-y-3">
      {campaignData.map((data, index) => {
        return (
          <CampaignItem
            key={index}
            {...data}
            onClick={() => console.log("Hello world!")}
          />
        );
      })}
    </div>
  );
};

export default Campaigns;

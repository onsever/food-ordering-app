import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-20 container mx-auto flex-wrap md:justify-start justify-center">
      <div className="relative md:flex-1 w-[50%] h-[50%] py-20">
        <Image
          src="/images/f1.png"
          alt="Product Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-1">
        <Title className="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-2 inline-block my-4">
          $10
        </span>
        <p className="my-4 pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aperiam unde eum qui iure blanditiis, in quae. Esse, illo nobis?
        </p>
        <div>
          <h3 className="text-xl font-bold">Choose the size</h3>
          <div className="flex items-center gap-20">
            <div className="relative w-8 h-8 cursor-pointer">
              <Image src="/images/size.png" alt="Product Image" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px]">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12 cursor-pointer">
              <Image src="/images/size.png" alt="Product Image" layout="fill" />
              <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px]">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16 cursor-pointer">
              <Image src="/images/size.png" alt="Product Image" layout="fill" />
              <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px]">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-4">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Mayonnaise</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Onions</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Bacon</span>
          </label>
        </div>
        <button className="btn-primary mt-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;

import Image from "next/image";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = () => {
  return (
    <div className="bg-secondary text-white rounded-3xl">
      <div className="flex items-center justify-center w-full bg-[#f1f2f3] p-6 rounded-bl-[2.8rem] rounded-br-[2.8rem] rounded-tl-2xl rounded-tr-2xl">
        <div className="relative w-36 h-36 transition-all hover:scale-110">
          <Image src="/images/f1.png" alt="Product Image" layout="fill" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">Delicious Pizza</h4>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fuga vero ipsa! Dolores.
        </p>
        <div className="flex items-center justify-between">
          <span>$20</span>
          <button className="flex items-center justify-center btn-primary w-10 h-10 rounded-full !p-0">
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

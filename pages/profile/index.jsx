import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineAccountCircle,
  MdLockOutline,
  MdOutlineDeliveryDining,
  MdOutlineExitToApp,
} from "react-icons/md";
import Settings from "./settings/Settings";
import UpdatePassword from "./updatepassword/UpdatePassword";
import Orders from "./orders/Orders";

const Index = () => {
  const [handleTabs, setHandleTabs] = useState(0);

  return (
    <div className="container mx-auto flex md:flex-row flex-col gap-x-5 my-6">
      <div className="border md:mb-0 mb-4">
        <div className="relative flex flex-col items-center p-10">
          <Image
            src="/images/client2.jpg"
            alt="User Image"
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="font-bold text-2xl mt-4">Onurcan Sever</span>
        </div>
        <ul className="w-full">
          <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 0 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(0)}>
            <MdOutlineAccountCircle />
            <span>Account</span>
          </li>
          <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 1 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(1)}>
            <MdLockOutline />
            <span>Password</span>
          </li>
          <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 2 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(2)}>
            <MdOutlineDeliveryDining />
            <span>Orders</span>
          </li>
          <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 3 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(3)}>
            <MdOutlineExitToApp />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      {handleTabs === 0 && <Settings />}
      {handleTabs === 1 && <UpdatePassword />}
      {handleTabs === 2 && <Orders />}
    </div>
  );
};

export default Index;

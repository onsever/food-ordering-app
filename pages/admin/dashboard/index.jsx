import React, { useState } from "react";
import {
    MdOutlineDeliveryDining,
    MdOutlineExitToApp,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import Products from "../../../components/dashboard/Products";
import Orders from "../../../components/dashboard/Orders";
import Categories from "../../../components/dashboard/Categories";

const Index = () => {
    const [handleTabs, setHandleTabs] = useState(0);

    return (
        <div className="container mx-auto flex md:flex-row flex-col gap-x-5 my-6">
            <div className="border md:mb-0 mb-4">
                <div className="relative flex flex-col items-center p-10">
                    <FaUserCircle className="w-24 h-24" />
                    <span className="font-bold text-2xl mt-4">Administrator</span>
                </div>
                <ul className="w-full">
                    <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 0 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(0)}>
                        <AiOutlineShoppingCart />
                        <span>Products</span>
                    </li>
                    <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 1 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(1)}>
                        <MdOutlineDeliveryDining />
                        <span>Orders</span>
                    </li>
                    <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 2 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(2)}>
                        <AiOutlineUnorderedList />
                        <span>Categories</span>
                    </li>
                    <li className={`flex items-center gap-x-2 py-2 pl-2 border text-lg cursor-pointer hover:bg-primary hover:text-white transition-all hover:border-primary border-l-0 border-r-0 ${handleTabs === 3 ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setHandleTabs(3)}>
                        <MdOutlineExitToApp />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
            {handleTabs === 0 && <Products />}
            {handleTabs === 1 && <Orders />}
            {handleTabs === 2 && <Categories />}
        </div>
    );
};

export default Index;

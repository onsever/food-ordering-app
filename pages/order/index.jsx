import React from "react";
import Image from "next/image";
import { MdPayment } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { RiEBikeLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";

const Index = () => {
  return (
    <div className="container mx-auto overflow-x-auto">
      <div className="flex  justify-center items-center flex-col my-10">
        <div className=" flex items-center flex-1  w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-primary uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Customer Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Customer Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  123456789...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Onurcan Sever
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Toronto, ON
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $25
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full md:px-10 px-3 py-5 bg-primary mt-6">
          <div className="flex flex-col items-center justify-center">
            <MdPayment className="w-5 h-5 mb-2" />
            <span>Payment</span>
          </div>
          <div className="flex flex-col items-center justify-center animate-pulse">
            <GrInProgress className="w-5 h-5 mb-2" />
            <span>Preparing</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <RiEBikeLine className="w-5 h-5 mb-2" />
            <span>On the way</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TiTickOutline className="w-5 h-5 mb-2" />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

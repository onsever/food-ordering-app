import React from 'react';
import Title from "../ui/Title";

const Orders = () => {
    return (
        <div className="w-full overflow-scroll">
            <Title className="text-[2.5rem] mb-4 md:text-left text-center">Orders Table</Title>
            <div className="flex items-center justify-start w-full my-4 overflow-scroll">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-primary uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Order ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Phone Number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Payment
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Total
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-secondary hover:bg-primary transition-all">
                        <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center gap-x-1 justify-center hover:text-white">
                            <span>123456789...</span>
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>Onurcan Sever</span>
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>+1 (647) 450-7913</span>
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>Pape Avenue, East York</span>
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            01-01-2022
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Cash
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            $25
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Preparing
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <button className="btn-primary !bg-green-500">Update Status</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;

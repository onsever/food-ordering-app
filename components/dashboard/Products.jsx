import React from 'react';
import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
    return (
        <div className="w-full overflow-scroll">
            <div className="w-full flex items-center justify-between">
                <Title className="text-[2.5rem] mb-4 md:text-left text-center">Edit Products</Title>
                <button className="btn-secondary">Add a Product</button>
            </div>
            <div className="flex items-center justify-start w-full my-4 overflow-scroll">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-primary uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Title
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-secondary hover:bg-primary transition-all">
                        <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center gap-x-1 justify-center hover:text-white">
                            <Image src="/images/f1.png" width={50} height={50} />
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>123456789...</span>
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Good Pizza
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            $10
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <button className="btn-primary !bg-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;

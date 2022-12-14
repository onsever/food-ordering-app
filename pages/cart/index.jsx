import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/cartSlice";

const Index = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto flex md:flex-row flex-col justify-between items-center">
      <div className="flex items-center justify-start md:w-3/4 w-full my-4 overflow-scroll">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-primary uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-3 px-6">
                Extras
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
          {cart.products.map((product) => {
            return (
                <tr key={product.id} className="bg-secondary hover:bg-primary transition-all">
                  <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center gap-x-1 justify-center hover:text-white">
                    <Image
                        src="/images/f1.png"
                        alt="Product Image"
                        width={50}
                        height={50}
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.extras.map((option) => {
                      return (
                          <span key={option.id}>{option.name}, </span>
                      );
                    })}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.quantity}
                  </td>
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-center md:items-start items-center md:py-0 py-4 md:px-16 px-0 text-white bg-secondary md:w-1/4 w-full md:mb-0 mb-4">
        <div>
          <Title className="uppercase text-[2.5rem]">Cart Total</Title>
          <div className="flex flex-col items-start gap-y-1">
            <span>
              <span className="font-bold">Subtotal: </span>${cart.total}
            </span>
            <span>
              <span className="font-bold">Discount: </span>$0.00
            </span>
            <span>
              <span className="font-bold">Total: </span>${cart.total}
            </span>
          </div>
          <button className="btn-primary my-3" onClick={() => dispatch(reset())}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Index;

import Image from "next/image";
import React, { useState } from "react";
import Title from "../../components/ui/Title";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const extras = [
  {
    id: 1,
    name: "Ketchup",
    price: 1,
  },
  {
    id: 2,
    name: "Onions",
    price: 1,
  },
  {
    id: 3,
    name: "Mayonnaise",
    price: 1,
  },
  {
    id: 4,
    name: "Bacon",
    price: 2.25,
  }
]

const items = [
  {
    id: 1,
    name: "Pizza 1",
    price: 10,
    description: "asd",
    options: [
      {
        id: 1,
        name: "Extra 1",
        price: 1,
      }
    ]
  }
]

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [addons, setAddons] = useState(extras);
  const [options, setOptions] = useState([]);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const updatePrice = (value) => {
    setPrice(price + value);
  }

  const handleSize = (index) => {
    const result = prices[index] - prices[size];
    setSize(index);
    updatePrice(result);
  }

  const handleChange = (e, item) => {
    if (e.target.checked) {
      updatePrice(item.price);
      setOptions([...extras, item]);
    } else {
      updatePrice(-item.price)
      setOptions(extras.filter((extra) => extra.id !== item.id));
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...items[0], extras, price, quantity: 1}))
  }

  console.log(cart)

  return (
    <div className="flex items-center md:h-screen md:gap-20 gap-0 container mx-auto flex-wrap md:justify-start justify-center md:mt-0 mt-4">
      <div className="relative md:flex-1 flex md:w-[50%] md:h-[50%] w-36 h-36 py-20">
        <Image
          src="/images/f1.png"
          alt="Product Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-1 mb-4">
        <Title className="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-2 inline-block my-4">
          ${price}
        </span>
        <p className="my-4 pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aperiam unde eum qui iure blanditiis, in quae. Esse, illo nobis?
        </p>
        <div>
          <h3 className="text-xl font-bold">Choose the size</h3>
          <div className="flex items-center gap-20">
            <div className="relative w-8 h-8 cursor-pointer" onClick={() => handleSize(0)}>
              <Image src="/images/size.png" alt="Product Image" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px]">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12 cursor-pointer" onClick={() => handleSize(1)}>
              <Image src="/images/size.png" alt="Product Image" layout="fill" />
              <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px]">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16 cursor-pointer" onClick={() => handleSize(2)}>
              <Image src="/images/size.png" alt="Product Image" layout="fill" />
              <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px]">
                Large
              </span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-4">Choose the additional</h3>
        <div className="flex gap-x-4 my-4">
          {addons.map((addon) => {
            return (
                <label key={addon.id} className="flex items-center gap-x-1">
                  <input type="checkbox" className="w-5 h-5 accent-primary" onChange={(e) => handleChange(e, addon)} />
                  <span className="text-sm font-semibold">{addon.name}</span>
                </label>
            );
          })}
        </div>
        <button className="btn-primary mt-2" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import Title from "../ui/Title";
import Input from "../input/Input";

const Categories = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState(["Pizza"]);

    return (
        <div className="w-full">
            <Title className="text-[2.5rem] mb-4 md:text-left text-center">Edit Categories</Title>
            <div>
                <div className="flex gap-4 items-center">
                    <Input placeholder="Add a new Category" onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
                    <button className="btn-primary" onClick={() => {
                        setCategories([...categories, categoryName]);
                        setCategoryName("");
                    }}>Add</button>
                </div>
                <ul className="block mt-10">
                    {categories.map((category, index) => {
                        return (
                            <li key={index} className="flex items-center justify-between border p-2 first:border border-t-0">
                                <span className="text-xl">{category}</span>
                                <button className="btn-primary !bg-danger" onClick={() => setCategories(categories.filter((cat) => cat !== category))}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Categories;

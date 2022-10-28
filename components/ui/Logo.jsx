import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="text-[2rem] font-dancing font-bold cursor-pointer">
        FoodLog
      </div>
    </Link>
  );
};

export default Logo;

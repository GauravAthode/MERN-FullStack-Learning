import React from "react";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { HiMiniCurrencyPound } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 px-4 text-3xl py-2 text-white text-center flex justify-around">
        <HiMiniCurrencyRupee className="animate-bounce"/>
        <AiFillDollarCircle className="animate-spin"/>
        <span className=" font-bload">
          currency Convertor
        </span>
        < HiMiniCurrencyEuro className="animate-pulse"/>
        <HiMiniCurrencyPound className="animate-ping"/>
      </div>
    </>
  );
};

export default Header;

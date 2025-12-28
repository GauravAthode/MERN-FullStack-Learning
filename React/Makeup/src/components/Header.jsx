import React from 'react'
import {Link} from "react-router-dom";
import { CgGirl } from "react-icons/cg";

const Header = () => {
  
  return (
    <>
      <div className="flex justify-between p-6 bg-gray-800 text-pink-600 rounded-2xl">

        <div className="text-4xl font-bold flex gap-3 items-center"><CgGirl /><h1>Beauty Makeup</h1></div>
        <div className="flex gap-20">
          <Link to={"/"} className="text-white text-xl">Home</Link>
          <Link to={"/About"} className="text-white text-xl">About</Link>
          <Link to={"/Product"} className="text-white text-xl">Product</Link>
          <Link to={"/Contact"} className="text-white text-xl">Contact</Link>
        </div>
      
      </div>
    </>
  )
}

export default Header;
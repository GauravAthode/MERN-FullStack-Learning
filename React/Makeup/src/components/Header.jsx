import React from 'react'
import { Link } from "react-router-dom";
import { CgGirl } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-6 bg-gray-800 text-pink-600 rounded-2xl sticky top-1 opacity-90 z-10">

        <div className="text-4xl font-bold flex gap-3 items-center">
          <CgGirl />
          <h1>Beauty Makeup</h1>
        </div>

        <div className="flex gap-12">
          <Link to="/" className="text-white text-xl hover:text-pink-400">Home</Link>
          <Link to="/about" className="text-white text-xl hover:text-pink-400">About</Link>
          <Link to="/product" className="text-white text-xl hover:text-pink-400">Product</Link>
          <Link to="/contact" className="text-white text-xl hover:text-pink-400">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="text-pink-400 text-lg border border-pink-400 px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-pink-500 text-gray-900 text-lg px-4 py-2 rounded-lg hover:bg-pink-600"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </>
  )
}

export default Header;

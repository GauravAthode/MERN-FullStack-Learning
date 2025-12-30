import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-20 py-16">

        <div>
          <h2 className="text-2xl font-bold text-pink-500">
            Beauty Makeup
          </h2>
          <p className="text-gray-600 mt-4">
            Enhancing your natural beauty with care & confidence ✨
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
            <li><Link to="/products" className="hover:text-pink-500">Products</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Email: gauravathode12345@gmail.com</li>
            <li>Phone: +91 9755784190</li>
            <li>Ayodhya Bypass, Bhopal, Madhya Pradesh, 462041</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Follow Us
          </h3>
          <p className="text-gray-600 mt-4">
            Stay connected for beauty tips& updates💖
          </p>
          <div className="flex gap-4 mt-4 text-gray-600">
            <span className="cursor-pointer hover:text-pink-500"><a href="https://www.instagram.com/gaurav__athode"><FaInstagramSquare /></a></span>
            <span className="cursor-pointer hover:text-blue-700"><a href="https://www.facebook.com/gaurav.athode.3"><FaFacebookSquare /></a></span>
            <span className="cursor-pointer hover:text-yellow-200"><a href="https://www.snapchat.com/add/gauravathode21"><FaSnapchatSquare /></a></span>
            <span className="cursor-pointer hover:text-black"><a href="https://x.com/Gaurav_Athode"><FaTwitterSquare /></a></span>
          </div>
        </div>

      </div>

      <div className=" border-t border-pink-200 py-6 text-gray-600 flex justify-end gap-100">
        <div>© 2025 Beauty Makeup. All rights reserved.</div>
        <div>Made with 💖 By Gaurav</div>
      </div>
    </footer>
  );
};

export default Footer;

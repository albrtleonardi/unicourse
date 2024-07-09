import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const GuestNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div className="bg-white text-[#202020] flex justify-between items-center p-4 font-inter px-12">
          <div className="flex items-center space-x-4">
            <GiHamburgerMenu className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu} />
            <p className="text-2xl font-satoshi font-medium mx-auto md:mx-0">Unicourse</p>
          </div>
          <div className="hidden md:flex space-x-10 ml-28">
            <p className="hover:text-gray-400 cursor-pointer">Home</p>
            <p className="hover:text-gray-400 cursor-pointer">Course</p>
            <p className="hover:text-gray-400 cursor-pointer">About Us</p>
            <p className="hover:text-gray-400 cursor-pointer">Contact</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-200 cursor-pointer">Login</button>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 cursor-pointer">Sign Up</button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-gray-white text-[#202020] flex flex-col items-start pl-12 space-y-4 p-4 md:hidden">
            <p className="hover:text-gray-400 cursor-pointer">Home</p>
            <p className="hover:text-gray-400 cursor-pointer">Course</p>
            <p className="hover:text-gray-400 cursor-pointer">About Us</p>
            <p className="hover:text-gray-400 cursor-pointer">Contact</p>
          </div>
        )}
      </div>
    );
}

export default GuestNavbar;

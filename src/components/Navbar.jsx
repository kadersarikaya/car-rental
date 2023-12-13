"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border border-white-400 py-4 px-2 md:px-4">
      <div className="container px-4 md:flex md:justify-between mx-auto items-center">
        <div className="flex justify-between">
        {/* Logo ve Search Input */}
          <div className="flex items-center">
            <Link href="/home">
              <span className="text-indigo-600 text-lg md:text-2xl font-bold mr-2 md:mr-4">MORENT</span>
            </Link>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch />
              </span>
              <input
                type="text"
                className="py-2 pl-8 border rounded-md focus:outline-none focus:border-blue-500 transition duration-150"
                placeholder="Search"
              />
            </div>
          </div>

        {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:text-gray-800"
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* User Avatar, Heart Icon, Language Selector */}
        <div className={`md:flex md:items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex items-center">
            <Link href="/favorites">
              <div className="relative cursor-pointer flex md:gap-0 gap-2 md:mt-0 mt-4 items-center">
                <GoHeartFill className="text-gray-700 cursor-pointer text-xl" />
                <p className="md:hidden block text-gray-700" >Favorites</p>
              </div>
            </Link>
            <div className="relative cursor-pointer md:ml-4 md:gap-0 md:mt-0 flex gap-2 mt-4 items-center">
              <FaUser className="text-gray-700 cursor-pointer" />
              <p className="md:hidden block text-gray-700" >Profile</p>
            </div>
          </div>
          <div className="md:ml-4 mt-4 md:mt-0">
            {/* Language Selector (For demonstration purposes, a simple text link is used here) */}
            <a href="#" className="text-gray-700">EN</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";
import { FaMoon, FaSun } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from '@/store/themeSlice';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [queryResult, setQueryResult] = useState([]);

  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchInput.trim() !== '') {
          const response = await axios.get(`http://localhost:4000/cars?q=${searchInput}`);
          setQueryResult(response.data);
        } else {
          setQueryResult([]);
        }
      } catch (error) {
        console.error("Error fetching cars: ", error);
      }
    };

    fetchData();
  }, [searchInput]);

  return (
    <nav className={`${isDarkMode ? "bg-[#333] text-white border-black" : "bg-white text-black"} border border-white-400 py-4 px-2 md:px-4`}>
      <div className="container px-4 md:flex md:justify-between mx-auto items-center">
        <div className="flex justify-between">
          {/* Logo ve Search Input */}
          <div className="flex items-center relative z-50">
            <Link href="/home">
              <span className="text-indigo-600 text-lg md:text-2xl font-bold mr-2 md:mr-4">MORENT</span>
            </Link>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch />
              </span>
              <input
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                className={`${isDarkMode ? "bg-[#333] text-white" : "bg-white text-black"} py-2 pl-8 border rounded-md focus:outline-none focus:border-blue-500 transition duration-150`}
                placeholder="Search"
              />
              {/* Display search results */}
              {queryResult.length > 0 && searchInput.length>0 &&(
                <div className="absolute mt-2 w-64 bg-white border border-gray-300 rounded-md overflow-hidden shadow-md">
                  {queryResult.map((car) => (
                    <Link key={car.id} href={`/car/${car.id}`}>
                      <p className="block p-2 hover:bg-gray-100">{car.title}</p>
                    </Link>
                  ))}
                </div>
              )} 
            </div>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className=""
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
                <GoHeartFill className="cursor-pointer text-xl" />
                <p className="md:hidden block">Favorites</p>
              </div>
            </Link>
            <div className="relative cursor-pointer md:ml-4 md:gap-0 md:mt-0 flex gap-2 mt-4 items-center">
              <FaUser className="cursor-pointer" />
              <p className="md:hidden block">Profile</p>
            </div>
            <div className='md:ml-4 mt-4 md:mt-0' 
             >
              {isDarkMode ? (
                <FaSun className='text-lg text-yellow-500' onClick={handleThemeToggle} />
              ) : (<FaMoon className='text-lg ' onClick={handleThemeToggle} />
              )}
            </div>
            
          </div>
          <div className="md:ml-4 mt-4 md:mt-0">
            {/* Language Selector (For demonstration purposes, a simple text link is used here) */}
            <p href="#">EN</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


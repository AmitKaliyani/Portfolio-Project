
import React, { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-2xl">
          <h1>Amit Kaliyani</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <a href='#home' className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href='#about' className="hover:text-pink-600 transition duration-300 scroll-smooth" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href='#skills' className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href='#project' className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>Projects</a>
            </li>
          </ul>
          <a href='#contact' className="bg-pink-600 text-white px-4 py-1 rounded-xl cursor-pointer hover:bg-pink-700 transition duration-300">
            <span>Contact Me</span>
          </a>
        </div>

       
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={handleToggle}
        >
          {toggleMenu ? <HiXMark /> : <HiBars3 />}
        </button>

       
        {toggleMenu && (
          <div className="absolute top-16 left-0 bg-black text-white w-full py-4 text-center md:hidden">
            <ul className="space-y-4 px-6">
              <li>
                <Link to="#" className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="#about" className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link to="#skills" className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>Skills</Link>
              </li>
              <li>
                <Link to="#projects" className="hover:text-pink-600 transition duration-300" onClick={closeMenu}>Projects</Link>
              </li>
            </ul>
            <div className="bg-pink-600 text-white px-6 py-2 w-auto rounded-xl cursor-pointer hover:bg-pink-700 transition duration-300 text-center inline-block mt-2">
              <span>Contact Me</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;


'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const NavLinks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between p-4 flex-wrap">
      {/* Navigation Menu */}
      <nav className="relative ml-6 mr-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen}
        >
          {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          <span className="sr-only">Toggle Navigation</span>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-[#522480] dark:bg-gray-800 md:static md:bg-transparent md:flex md:items-center md:justify-start transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 font-medium mt-2 bg-[#522480] dark:border-gray-700 w-full  rounded-md p-2 justify-start">
            <li className="relative h-full mb-2 flex items-center">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-blue-400 dark:hover:text-white flex items-center h-full px-4 py-2 w-full text-left"
              >
                <FontAwesomeIcon icon={faBars} className="mr-2" />
                Catalog
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-[#522480]  shadow-lg rounded-md z-10">
                  <ul className="flex flex-col w-full">
                    <li className="mb-2">
                      <Link href="/" className="block px-4 py-2 text-white hover:bg-[#522480] ">Home</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/products" className="block px-4 py-2 text-white hover:bg-sky-500">Products</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/news" className="block px-4 py-2 text-white hover:bg-sky-500">News</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/about" className="block px-4 py-2 text-white hover:bg-sky-500">About Us</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/contact" className="block px-4 py-2 text-white hover:bg-sky-500">Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Logo and Title */}
      <div className="flex items-center space-x-4 ml-2">
        <Image
          src="/assets/images/mylogo.png"
          className="h-12 rounded-lg"
          alt="Clemar Logo"
          width={180}
          height={32}
        />
      </div>

      {/* Search Bar */}
      <div className="relative h-12 w-96 flex-grow">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-4 pr-10 py-2 rounded-l-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-full w-full"
          placeholder="Catalog"
          aria-label="Search"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 h-full w-20 bg-[#522480]  rounded-r-md border-none cursor-pointer flex items-center justify-center"
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </button>
      </div>

      {/* Additional Links */}
      <div className="flex items-center space-x-4 h-12 ml-4">
        <Link href="/about" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white h-full flex items-center">About Us</Link>
        <Link href="/favorites" className="flex items-center text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white h-full">
          <FontAwesomeIcon icon={faHeart} className="text-[#522480]  mr-2" />
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;

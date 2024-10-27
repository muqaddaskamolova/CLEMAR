"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CustomButton from "./CustomButton";

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-[#522480]  p-4">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
                {/* Location and Contact */}
                <div className="text-white text-lg font-bold flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Location:</span>
                    <a href="https://facebook.com" className="underline" target="_blank" rel="noopener noreferrer">
                        Tashkent
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center space-x-4 md:space-x-6 mt-2 md:mt-0">
                    <ul className="flex space-x-6 items-center">
                        {[
                            { icon: faFacebook, label: "Facebook", url: "https://facebook.com" },
                            { icon: faTwitter, label: "Twitter", url: "https://twitter.com" },
                            { icon: faInstagram, label: "Instagram", url: "https://instagram.com" },
                            { icon: faLinkedin, label: "Linkedin", url: "https://linkedin.com" }
                        ].map(({ icon, label, url }) => (
                            <li key={label} className="flex items-center space-x-2">
                                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={icon} className="text-white hover:text-gray-400" size="lg" />
                                    <span className="text-white">{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info and Language Dropdown */}
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <span className="text-white hidden md:block">+99855 500 15 11</span>
                    <div className="relative">
                        <button
                            className="flex items-center p-2 bg-transparent text-white"
                            onClick={toggleDropdown}
                            aria-expanded={dropdownOpen}
                        >
                            <i className="flag-united-kingdom flag m-0"></i>
                            <span className="ml-2">English</span>
                            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute bg-[#522480]  text-white shadow-lg z-10">
                                <li>
                                    <a className="dropdown-item block p-2 hover:bg-gray-200" href="#">
                                        <i className="flag-united-kingdom flag"></i> English <i className="fa fa-check text-success ms-2"></i>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item block p-2 hover:bg-gray-200" href="#">
                                        <i className="flag-poland flag"></i> Polski
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item block p-2 hover:bg-gray-200" href="#">
                                        <i className="flag-spain flag"></i> Español
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item block p-2 hover:bg-gray-200" href="#">
                                        <i className="flag-france flag"></i> Français
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item block p-2 hover:bg-gray-200" href="#">
                                        <i className="flag-germany flag"></i> Deutsch
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item block p-2 hover:bg-gray-200" href="#">
                                        <i className="flag-china flag"></i> 中文
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="bg-white p-2 text-center rounded-full">
                        <CustomButton
                            title="Get A Bonus"
                            containerStyles="text-[#522480]  rounded-full mt-2 px-3 py-1 text-md"
                            handleClick={handleScroll}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

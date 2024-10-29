import React from 'react';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { FaInstagram, FaFacebookF, FaYoutube, FaTelegramPlane } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
                {/* Main Information Section */}
                <div className="flex flex-col gap-3 mb-6 md:mb-0">
                    <h2 className="text-xl font-bold">
                        Clemar - Distributor of more than 25 world brands in Uzbekistan
                    </h2>
                    <p>Contact us</p>
                    <a href="tel:+998990081411" className="text-[#7024bc] hover:underline flex items-center gap-2">
                        <AiFillPhone className="h-5 w-5" /> +998 99 008 14 11
                    </a>
                    <a
                        href="https://yandex.ru/navi/?ll=69.220719,41.290161&panorama[point]=69.220719,41.290161&panorama[direction]=227.914276,-0.865454&panorama[span]=90.000000,90.000000&panorama[id]=1486659497_804360267_23_1571374783"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mt-2 text-[#7024bc] hover:underline"
                    >
                        <GiPositionMarker className="h-5 w-5" />
                        <span>Our address</span>
                    </a>
                    <a
                        href="mailto:info@clemar.uz"
                        className="flex items-center gap-2 mt-2 text-[#7024bc] hover:underline"
                    >
                        <AiFillMail className="h-5 w-5" /> info@mycleaners.uz
                    </a>
                    <div className="flex gap-4 mt-4">
                        {[
                            { href: "https://www.instagram.com/cleanmarket.uz", icon: <FaInstagram className="h-6 w-6" /> },
                            { href: "https://www.facebook.com/profile.php?", icon: <FaFacebookF className="h-6 w-6" /> },
                            { href: "https://youtube.com/@cleanmarket_uz", icon: <FaYoutube className="h-6 w-6" /> },
                            { href: "https://t.me/cleaning_market", icon: <FaTelegramPlane className="h-6 w-6" /> },
                        ].map(({ href, icon }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" key={href} className="h-6 w-6">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Products Section */}
                <div className="flex flex-col gap-2 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold">Products</h3>
                    {["Paper products", "Professional vacuum cleaners", "Floor Cleaning Machines", "Detergents"].map((item) => (
                        <a className="hover:underline" href="/" key={item}>{item}</a>
                    ))}
                </div>

                {/* Information Section */}
                <div className="flex flex-col gap-2 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold">Information</h3>
                    {["About Us", "Categories", "Why choose us?", "FAQ"].map((item) => (
                        <a className="hover:underline" href="/" key={item}>{item}</a>
                    ))}
                </div>

                {/* Address Section */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <a className="hover:underline" href="/">Bunyodkor street, Tashkent</a>
                    <div className="flex flex-col items-start">
                        <span className="hover:underline">Click here to view on the map</span>
                        <img 
                            src="https://chembros.uz/wp-content/uploads/2022/02/map-scaled.jpg" 
                            alt="Map Icon" 
                            className="rounded-lg mt-1 w-full max-w-xs" 
                        />
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex justify-center mt-6">
                <p className="text-center">All rights reserved &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;

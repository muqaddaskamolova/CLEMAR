"use client";
// components/WhyWorkWithUs.tsx
import React from 'react';

const Advantages: React.FC = () => {
    const features = [
        {
            imgSrc: "/assets/images/OfficialDealer.svg", // Corrected path
            alt: "Official Dealer",
            title: "Official Dealer",
            description: "We work without intermediaries, offering the best prices."
        },
        {
            imgSrc: "/assets/images/FreeDemo.svg", // Corrected path
            alt: "Free Demonstration",
            title: "Free Demonstration",
            description: "We bring the equipment to you for a 'test drive'."
        },
        {
            imgSrc: "/assets/images/Servicepng.svg", // Corrected path (check file extension)
            alt: "Service",
            title: "Service",
            description: "Our service is available 24/7 across the country."
        },
        {
            imgSrc: "/assets/images/Training.svg", // Corrected path
            alt: "Training",
            title: "Training",
            description: "We provide training to ensure long-lasting equipment usage."
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-left mb-12 text-[#7024bc]">Why Work With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center bg-[#f7f7f7] rounded-lg p-6 text-center border border-[#7024bc]">
                        <div className="flex justify-center w-full mb-4">
                            <img src={feature.imgSrc} alt={feature.alt} className="w-16 h-16 mb-4" style={{ filter: 'invert(25%) sepia(91%) saturate(478%) hue-rotate(176deg) brightness(96%) contrast(92%)' }} />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-center text-[#7024bc]">{feature.title}</h3>
                        <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advantages;

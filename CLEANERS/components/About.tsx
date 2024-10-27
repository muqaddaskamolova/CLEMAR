"use client";
// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-[#f9f9f9] text-[#7024bc] min-h-screen flex flex-col justify-center py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
                <p className="text-lg mb-6 text-center leading-relaxed max-w-3xl mx-auto">
                    Welcome to <strong>Cleaners.uz</strong>, your premier source for high-quality cleaning machines. 
                    We are committed to providing you with the best cleaning solutions, focusing on reliability, exceptional customer service, and innovation.
                </p>
                <p className="text-lg mb-6 text-center leading-relaxed max-w-3xl mx-auto">
                    Established in 2021, Cleaners.uz has evolved from a passion for cleaning technology into a trusted brand 
                    serving customers across Uzbekistan. We are proud to contribute to the eco-friendly cleaning revolution with our range of products.
                </p>
                <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
                    Our extensive selection of cleaning machines caters to both commercial and residential needs, ensuring efficiency and effectiveness 
                    in every task. Our goal is to make your cleaning experience as seamless and rewarding as possible.
                </p>
                <h2 className="text-4xl font-bold mt-8 mb-4 text-center">Our Values</h2>
                <div className="bg-white text-[#7024bc] p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <ul className="list-disc list-inside mb-6 text-lg">
                        <li className="mb-2">🌟 <strong>Quality:</strong> We provide only the best cleaning machines.</li>
                        <li className="mb-2">🤝 <strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
                        <li className="mb-2">💡 <strong>Innovation:</strong> We strive for continuous improvement in our products and services.</li>
                        <li className="mb-2">🌱 <strong>Sustainability:</strong> We are committed to eco-friendly practices.</li>
                    </ul>
                </div>
                <p className="text-lg text-center leading-relaxed mt-6 max-w-3xl mx-auto">
                    Thank you for choosing Cleaners.uz! We look forward to helping you find the perfect cleaning machine for your needs.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;

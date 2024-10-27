"use client";
import React from 'react';

const advantagesData = [
    {
        id: 1,
        imgSrc: 'https://clean.maxone.uz/files/1talash.png',
        title: 'Service products',
    },
    {
        id: 2,
        imgSrc: 'https://clean.maxone.uz/files/2tanlash.png',
        title: 'Spare parts of goods',
    },
    {
        id: 3,
        imgSrc: 'https://clean.maxone.uz/files/3tanlash.png',
        title: 'Rental of goods',
    },
    {
        id: 4,
        imgSrc: 'https://clean.maxone.uz/files/4tanlash.png',
        title: 'Cleaner accessories',
    },
];

const Advantages: React.FC = () => {
    return (
        <div className="Advantages parent py-8">
            <div className="wrapper mx-auto px-4">
                <h1 className="sub-title text-2xl font-bold text-center">Why choose us?</h1>
                <div className="cards border border-sky-400 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4">
                    {advantagesData.map((advantage) => (
                        <div key={advantage.id} className="card flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform duration-200 hover:scale-105">
                            <img src={advantage.imgSrc} alt={advantage.title} className="w-24 h-24 object-contain" />
                            <h1 className="text-lg font-semibold text-center mt-2">{advantage.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;

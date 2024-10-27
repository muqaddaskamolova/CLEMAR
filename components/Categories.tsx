"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const categories = [
    {
        id: 15,
        title: 'Paper products',
        imgSrc: '/assets/images/product10.jpg',
        productsCount: '4 PC. products',
    },
    {
        id: 16,
        title: 'Sweeper Car',
        imgSrc: '/assets/images/product14.jpg',
        productsCount: '4 PC. products',
    },
    {
        id: 17,
        title: 'Clean Detergent',
        imgSrc: '/assets/images/product11.jfif',
        productsCount: '5 liters',
    },
    {
        id: 18,
        title: 'Another Detergent',
        imgSrc: '/assets/images/product3.jpg',
        productsCount: '5 liters',
    },
];

const Categories: React.FC = () => {
    return (
        <div className="HomeCategories parent py-8">
            <div className="wrapper mx-auto px-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="sub-title text-2xl font-bold">Categories</h1>
                    <a className="text-[#522480]  hover:underline" href="/categories">View all</a>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    className="mySwiper"
                    style={{ width: '100%', maxWidth: '1200px' }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        480: { slidesPerView: 1 }, // Ensure 1 slide on extra small devices
                    }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <a className="product flex flex-col justify-between gap-1 p-4 rounded-lg bg-white shadow-md border border-[#522480]  transition-transform duration-200 hover:scale-105" href={`/categories/${category.id}`}>
                                <p className="text-lg font-semibold text-center">{category.title}</p>
                                <div className="relative w-full h-40 mb-2"> {/* Set height */}
                                    <Image 
                                        src={category.imgSrc} 
                                        alt={category.title} 
                                        layout="fill" 
                                        objectFit="contain" // Change to cover for equal dimensions
                                        className="rounded" 
                                    />
                                </div>
                                <p className="min-text text-gray-500 text-center">{category.productsCount}</p>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;

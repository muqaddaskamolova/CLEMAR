"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const bestProducts = [
    {
        id: 1,
        title: 'Ultra Clean Detergent',
        imgSrc: '/assets/images/product10.jpg',
        productsCount: '5 liters',
        price: 10.99,
    },
    {
        id: 2,
        title: 'Ultra Clean Detergent',
        imgSrc: '/assets/images/product8.jpg',
        productsCount: '5 liters',
        price: 12.99,
    },
    {
        id: 3,
        title: 'Ultra Clean Detergent',
        imgSrc: '/assets/images/product6.jpg',
        productsCount: '5 liters',
        price: 9.99,
    },
    {
        id: 4,
        title: 'Ultra Clean Detergent',
        imgSrc: '/assets/images/product14.jpg',
        productsCount: '5 liters',
        price: 14.99,
    },
];

const BestProducts: React.FC = () => {
    return (
        <div className="BestProducts parent py-8">
            <div className="wrapper mx-auto px-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="sub-title text-2xl font-bold">Best Products</h1>
                    <a className="text-blue-500 hover:underline" href="/best-products">View all</a>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    className="mySwiper"
                    style={{ width: '100%', maxWidth: '1400px' }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }, // Adjust for tablet screens
                        1280: { slidesPerView: 4 }, // Full width for larger screens
                    }}
                >
                    {bestProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <a className="product flex flex-col gap-1 p-4 rounded-lg bg-white shadow-md border border-sky-400 transition-transform duration-200 hover:scale-105" href={`/products/${product.id}`}>
                                <div className="relative w-full h-40">
                                    <FontAwesomeIcon className="absolute top-2 right-2 h-6 w-6 text-green-500 rounded-full p-1" icon={regularHeart} />
                                    <Image
                                        src={product.imgSrc}
                                        alt={product.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded"
                                    />
                                </div>
                                <p className="text-lg font-semibold text-gray-600">{product.title}</p>
                                <p className="min-text text-gray-500">{product.productsCount}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
                                    <button className="bg-sky-400 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                                        Buy
                                    </button>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BestProducts;

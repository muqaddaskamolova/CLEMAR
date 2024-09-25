"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Image from 'next/image';
import CarouselIMG1 from '../public/assets/images/carousel1.png';
import CarouselIMG2 from '../public/assets/images/carousel2.jpg';
import CarouselIMG3 from '../public/assets/images/carousel3.png';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full mt-8 rounded-lg overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="relative h-56 md:h-96"
        spaceBetween={10}
        slidesPerView={1}
      >
        {/* Carousel Items */}
        {[CarouselIMG1, CarouselIMG2, CarouselIMG3].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={img}
                alt={`carousel.slide${index + 1}`}
                className="block w-full h-full object-cover" // Use object-cover for better responsiveness
                layout="fill" // Ensures the image covers the entire container
                objectFit="cover" // Maintains aspect ratio while covering the area
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider controls */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center h-full px-4 cursor-pointer">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
          data-carousel-prev
        >
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>
        
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
          data-carousel-next
        >
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;

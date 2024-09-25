// components/Partners.tsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const partnersData = [
    'https://clean.maxone.uz/files/638e307b3eae41f3706b4076_1.png',
    'https://clean.maxone.uz/files/logo_white_dpyyK7x.png',
    'https://clean.maxone.uz/files/580b57fcd9996e24bc43c472_1.png',
    'https://clean.maxone.uz/files/SAG-01_1_58HJA1q.png',
    'https://clean.maxone.uz/files/Artel-01_1.png',
    'https://clean.maxone.uz/files/akfa_group-01_1.png',
    'https://clean.maxone.uz/files/imzo_akfa-01_1.png',
    'https://clean.maxone.uz/files/Ecobozor-01_1.png',
    'https://clean.maxone.uz/files/UzAuto-01_1.png',
    'https://clean.maxone.uz/files/TCM-01-removebg-preview_1.png',
    'https://clean.maxone.uz/files/uzbekistan-airways9087-removebg-preview_1.png',
    'https://clean.maxone.uz/files/metro_logotip-01_1.png',
    'https://clean.maxone.uz/files/IT_park-01_2_Xa6VCjz.png',
    'https://clean.maxone.uz/files/580b57fcd9996e24bc43c1dc.png',
    'https://clean.maxone.uz/files/58737bd3f3a71010b5e8ef37.png',
    'https://clean.maxone.uz/files/logo.png',
    'https://clean.maxone.uz/files/124123123.png',
    'https://clean.maxone.uz/files/Tashkent_City-01_1.png',
];

const Partners: React.FC = () => {
    return (
        <div className="Partners parent py-8 bg-sky-400">
            <div className="wrapper mx-auto px-4">
                <h1 className="sub-title text-2xl font-bold text-white">They trusted us</h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {partnersData.map((src, index) => (
                        <SwiperSlide key={index} className="partner flex justify-center items-center bg-white rounded-lg shadow-md p-2">
                            <img src={src} alt={`Partner ${index}`} className="w-32 h-32 object-contain" /> {/* Set uniform size */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;

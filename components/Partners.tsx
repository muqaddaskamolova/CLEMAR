// components/Partners.tsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
    { src: "https://clean.maxone.uz/files/silk-logo.png", alt: "1" },
    { src: "https://clean.maxone.uz/files/Enter.png", alt: "2" },
    { src: "https://clean.maxone.uz/files/logo_new_blue_1.png", alt: "3" },
    { src: "https://clean.maxone.uz/files/x8zm1xus1vtkxpy6loiv4c8jevtnm5nr.png", alt: "4" },
    { src: "https://clean.maxone.uz/files/loook2_7470e30e20.png", alt: "5" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-buec.png", alt: "6" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-buyq.jpeg", alt: "7" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-buuz.png", alt: "8" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bvaw.png", alt: "9" },
    { src: "https://clean.maxone.uz/files/6281edd49b9cbbe208790650d29cf1fe.png", alt: "10" },
    { src: "https://clean.maxone.uz/files/uzum.png", alt: "11" },
    { src: "https://clean.maxone.uz/files/Tashkent_City_logo.svg.png", alt: "12" },
    { src: "https://clean.maxone.uz/files/Coca-Cola_logo.svg.png", alt: "13" },
    { src: "https://clean.maxone.uz/files/Pepsi_logo_2014.svg.png", alt: "14" },
    { src: "https://clean.maxone.uz/files/Logo_IT_Park_Uzbekistan.svg.png", alt: "15" },
    { src: "https://clean.maxone.uz/files/Logo_of_Tashkent_Metro.png", alt: "17" },
    { src: "https://clean.maxone.uz/files/Uzbekistan_Airways_logo.svg.png", alt: "18" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bvyt.png", alt: "19" },
    { src: "https://clean.maxone.uz/files/Uzauto-motors-logo.jpg", alt: "20" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bwbw.png", alt: "21" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bvkk.png", alt: "22" },
    { src: "https://clean.maxone.uz/files/_.png", alt: "23" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bwex.png", alt: "24" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bvup.png", alt: "25" },
    { src: "https://clean.maxone.uz/files/BYD-Logo-1024x576.webp", alt: "26" },
    { src: "https://clean.maxone.uz/files/application9019df59-b204-4ac6-a88b-67e779e4704b.jpg", alt: "27" },
    { src: "https://clean.maxone.uz/files/SCR-20241002-bvqz.png", alt: "28" },
    { src: "https://clean.maxone.uz/files/2024-10-02_00.55.14_5FIaJ48.jpg", alt: "ma" },
];

const Partners: React.FC = () => {
    return (
        <div className="Partners parent py-8 bg-[#7024bc]">
            <div className="wrapper mx-auto px-4">
                <h1 className="sub-title text-2xl font-bold text-white">They trusted us</h1>
                <Swiper
                 modules={[FreeMode, Pagination, Autoplay,Navigation]} // Add Autoplay module here
                 pagination={{ clickable: true }}
                 loop={true} // Loop enabled
                 autoplay={{
                 delay: 3000, // Delay between transitions (in ms)
                 disableOnInteraction: false, // Autoplay continues after user interaction
        }}   
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
                            slidesPerView: 6,
                        },
                    }}
                >
                    {clients.map(({ src, alt }, index) => (
                        <SwiperSlide key={index} className="partner flex justify-center items-center bg-white rounded-lg shadow-md p-2">
                            <img src={src} alt={alt} className="w-32 h-32 object-content" /> {/* Fixed width and height */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;

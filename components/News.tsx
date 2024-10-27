"use client";
import React from 'react';

const newsData = [
    {
        id: 1,
        title: 'Installment plan from Clemar',
        description: `Do you want to purchase professional equipment, but are not ready to part with the full amount? We have a solution for you! Find out about our convenient installment system, which allows you to purchase the necessary equipment right now and pay it off gradually. Visit the 'Installment' section to find out all the details and place your order today. Make your purchase even more affordable with Clemar!`,
        imgSrc: '/assets/images/foiz.png',
        link: '/news/2',
    },
    {
        id: 2,
        title: 'Promotions in Clemar',
        description: `Find out about our special offers and discounts! Visit the 'Promotions' section to be aware of all the profitable opportunities from Clemar. Save on purchases and receive additional bonuses. We are waiting for you on our social networks for even bigger surprises.`,
        imgSrc: '/assets/images/prize.png',
        link: '/news/3',
    },
];

const News: React.FC = () => {
    return (
        <div className="Bonus parent py-8">
            <div className="wrapper mx-auto px-4">
                <h1 className="sub-title text-2xl font-bold text-center">Our news</h1>
                <div className="cards flex flex-col md:flex-row justify-center gap-4">
                    {newsData.map((news, index) => (
                        <div 
                            key={news.id} 
                            className={`flex flex-col rounded-lg shadow-md overflow-hidden ${index === 0 ? 'bg-sky-400 w-full md:w-[60%]' : 'bg-gray-800 w-full md:w-[40%]'}`}
                        >
                            <div className="left flex-1 flex flex-col justify-between p-4">
                                <div className="texts gap-2">
                                    <h1 className="big-text text-lg font-semibold text-white">{news.title}</h1>
                                    <p className="min-text desc text-white">{news.description}</p>
                                    <a className="more_btn scale-105 rounded-md text-blue-500 hover:underline" href={news.link}>
                                        Read more
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center justify-end p-4">
                                {index === 0 ? (
                                    <img src={news.imgSrc} alt={news.title} className="w-64 h-48 object-contain" />
                                ) : (
                                    <img src={news.imgSrc} alt={news.title} className="w-32 h-32 object-cover" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;

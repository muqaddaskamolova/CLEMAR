"use client";
import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        { question: "What cleaning services do you offer?", answer: "We offer a wide range of cleaning services including residential, commercial, and specialized cleaning." },
        { question: "How can I schedule a cleaning?", answer: "You can schedule a cleaning by contacting us via phone or through our website's booking form." },
        { question: "Are your cleaning products eco-friendly?", answer: "Yes, we use environmentally safe products for all our cleaning services." },
        { question: "Do I need to provide any cleaning supplies?", answer: "No, our team comes fully equipped with all necessary cleaning supplies." },
        // Add more FAQs as needed
    ];

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="FAQ parent py-8">
            <div className="wrapper mx-auto px-4 flex flex-col md:flex-row gap-6">
                <div className="left flex-1 flex flex-col gap-2">
                    <div className="top gap-1">
                        <h1 className="sub-title text-2xl font-bold text-center md:text-left">Frequently Asked Questions</h1>
                        <p className="text text-center md:text-left">Find answers to the questions we’re asked most frequently.</p>
                    </div>
                </div>
                <div className="right flex-1 flex flex-col gap-4 max-w-md mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item border-b border-gray-300 py-2">
                            <button
                                className="faq-question text-left w-full text-lg font-medium text-[#7024bc] hover:text-[#522480] focus:outline-none"
                                onClick={() => toggleAnswer(index)}
                            >
                                {faq.question}
                            </button>
                            {activeIndex === index && (
                                <p className="faq-answer mt-2 text-[#7024bc]">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

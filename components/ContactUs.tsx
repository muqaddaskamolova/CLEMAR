"use client";
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, phone, message });
        setName('');
        setPhone('');
        setMessage('');
    };

    return (
        <div className="Contacts parent py-8">
            <div className="wrapper mx-auto px-4 flex flex-col md:flex-row gap-6">
                <div className="left flex-1 flex flex-col gap-2">
                    <div className="top gap-1">
                        <h1 className="sub-title text-2xl font-bold text-center md:text-left">Contact us</h1>
                        <p className="text text-center md:text-left">Leave your phone number and our managers will contact you soon.</p>
                    </div>
                </div>
                <form className="right flex-1 flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <textarea
                        rows={5}
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="send_btn rounded-lg p-2 text-white bg-sky-400 hover:bg-sky-500"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

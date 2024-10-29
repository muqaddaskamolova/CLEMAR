"use client";
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const sendToken = '5810941788:AAG4BVSolz6g2-CaXDKvtnvHEyBUohp196g';
    const chatId = -1001821411125;
    const url = `https://api.telegram.org/bot${sendToken}/sendMessage`;

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        let valid = true;
        if (name.trim() === "") {
            setNameError("Please enter your name.");
            valid = false;
        } else {
            setNameError("");
        }
        if (email.trim() === "") {
            setEmailError("Please enter your email.");
            valid = false;
        } else {
            setEmailError("");
        }
        if (phone.trim() === "") {
            setPhoneError("Please enter your phone number.");
            valid = false;
        } else {
            setPhoneError("");
        }
        if (description.trim() === "") {
            setDescriptionError("Please provide a brief description.");
            valid = false;
        } else {
            setDescriptionError("");
        }

        if (!valid) return;

        // Telegram message content
        const messageContent = `Your name: ${name}\nYour email: ${email}\nYour phone: ${phone}\nDescription: ${description}`;

        // Send data to Telegram
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: messageContent,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    alert("Message sent successfully!");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setDescription("");
                } else {
                    alert("Error sending message. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred, please try again!");
            });
    };

    return (
        <div className="Contacts parent py-8">
            <div className="wrapper mx-auto px-4 flex flex-col md:flex-row gap-6">
                <div className="left flex-1 flex flex-col gap-2">
                    <div className="top gap-1">
                        <h1 className="sub-title text-2xl font-bold text-center md:text-left">Contact Us</h1>
                        <p className="text text-center md:text-left">Leave your phone number, and our managers will contact you soon.</p>
                    </div>
                </div>
                <form className="right flex-1 flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleChange}>
                    <input
                        type="text"
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    {nameError && <p className="text-red-500">{nameError}</p>}

                    <input
                        type="email"
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}

                    <input
                        type="tel"
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    {phoneError && <p className="text-red-500">{phoneError}</p>}

                    <textarea
                        rows={5}
                        className="input text rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7024bc]"
                        placeholder="Your message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    {descriptionError && <p className="text-red-500">{descriptionError}</p>}

                    <button
                        type="submit"
                        className="send_btn rounded-lg p-2 text-white bg-[#7024bc] hover:bg-[#522480]"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

"use client";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600 cursor-pointer select-none">
                    Tavilgaa.com
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
                    <li>
                        <a href="#home" className="hover:text-blue-600 transition">
                            Нүүр
                        </a>
                    </li>
                    <li>
                        <a href="#products" className="hover:text-blue-600 transition">
                            Сандлууд
                        </a>
                    </li>

                    <li>
                        <Link href="/About" legacyBehavior>
                            <a className="hover:text-blue-600 transition">Бидний тухай</a>
                        </Link>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-blue-600 transition">
                            Холбоо барих
                        </a>
                    </li>
                </ul>
                {menuOpen && (
                    <ul className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 font-semibold text-gray-700">
                        <li>
                            <a href="#home" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
                                Нүүр
                            </a>
                        </li>
                        <li>
                            <a href="#products" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
                                Сандлууд
                            </a>
                        </li>
                        <li>
                            <Link href="/About" legacyBehavior>
                                <a
                                    className="block hover:text-blue-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Бидний тухай
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="#contact" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
                                Холбоо барих
                            </a>
                        </li>
                    </ul>
                )}


                {/* Mobile hamburger button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu Toggle"
                >
                    {/* Hamburger icon */}
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}

        </nav>
    );
};

export const Container = () => {
    const chairs = [
        {
            name: "Оффис Сандал",
            price: "₮100,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748089010/mbrz0qu9zzcv4dylolgr.jpg",
        },
        {
            name: "Тансаг сандал",
            price: "₮150,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748089011/another-chair.jpg",
        },
        {
            name: "Зочны сандал",
            price: "₮90,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748089012/yet-another-chair.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 pt-36">
            <div className="container mx-auto px-4 max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">Сандлууд</h1>

                <Slider {...settings}>
                    {chairs.map((chair, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden p-4"
                        >
                            <img
                                src={chair.imageUrl}
                                alt={chair.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{chair.name}</h2>
                            <p className="text-gray-700 mb-4">{chair.price}</p>
                            <Link href="/Ordermodel" legacyBehavior>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Захиалах
                                </button>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export const Footer = () => {

    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Left хэсэг */}
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Tavilgaa.com. Бүх эрх хуулиар хамгаалагдсан.
                </div>

                {/* Center хэсэг - Холбоо барих */}
                <div className="text-sm">
                    Холбоо барих: <a href="tel:+97612345678" className="hover:text-white">+976 88175658, 99917208</a> |
                    <a href="mailto:info@tavilgaa.com" className="ml-2 hover:text-white">monhbatsanchir1@gmail.com</a>
                </div>
                {/* Right хэсэг - Facebook icon */}
                <div>
                    <a
                        href="https://www.facebook.com/profile.php?id=61565050778397"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-gray-400 hover:text-blue-600 transition"
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                        </svg>
                    </a>
                </div>

            </div>
        </footer>
    );
};

"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 w-full p-4 sm:p-6 lg:p-8 flex items-center justify-between  shadow-lg z-50">
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
                <a href='#'>
                    <div
                        className="w-full">
                        <img src="https://res.cloudinary.com/ddyif81ff/image/upload/v1723469715/uvzj3cvl9a0azzub5p7l.png" alt="Test Image" className='h-[100px] lg:h-[160px]' />

                    </div>
                </a>
            </div>
            <button
                className="sm:hidden text-4xl focus:outline-none ml-8 h-[60px] w-[60px] text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '' : '☰'}
            </button>
            <ul className={`fixed top-0 right-0 w-[50vw] h-[300px] flex flex-col items-start bg-gradient-to-br p-6 gap-[20px] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:relative sm:flex sm:flex-row sm:space-x-10 sm:w-auto sm:h-auto sm:translate-x-0 sm:bg-transparent`}>
                {isOpen && (
                    <button
                        className="absolute top-4 right-4 text-white text-2xl bg-black"
                        onClick={() => setIsOpen(false)}
                    >
                        X
                    </button>
                )}

                <NavItem href="#chanar" title="Чанар" />
                <NavItem href="#beleg" title="Бэлэг" />
                <NavItem href="#hereglee" title="Хэрэглээ" />
                <NavItem href="#Utas" title="Утас" />
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                </div>
            </ul>
        </nav>
    );
}

function NavItem({ href, title }) {
    return (
        <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
                href={href}
                title={title}
                className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
            >
                {title}
            </a>
        </div>
    );
}

"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = () => {
    const chairs = [
        {
            name: "Оффис Сандал",
            price: "₮100,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748089010/mbrz0qu9zzcv4dylolgr.jpg",
            available: true,
        },
        {
            name: "Gaming Сандал",
            price: "₮150,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/807c807c3ca916d25989b04ef6b6e3cb48a0b398160e_Pzl98a188e6d70ec6_jpg_dvwr1c.webp",
            soon: true,
        },
        {
            name: "Зочны сандал",
            price: "₮90,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
            soon: true,
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
        <div className="bg-gray-200 min-h-screen py-12 pt-36">
            <div className="container mx-auto px-4 max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">Сандлууд</h1>

                <Slider {...settings}>
                    {chairs.map((chair, index) => (
                        <div
                            key={index}
                            className="rounded-2xl shadow-lg overflow-hidden p-4 bg-white"
                        >
                            <img
                                src={`${chair.imageUrl}?w=400&h=320&c=fill`}
                                alt={chair.name}
                                className="w-full h-80 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{chair.name}</h2>
                            <p className="text-gray-700 mb-2">{chair.price}</p>

                            {/* Нөхцөлт байдлыг харуулж байна */}
                            {chair.available && (
                                <p className="text-green-600 font-medium mb-2">Бэлэн</p>
                            )}
                            {chair.soon && (
                                <p className="text-red-500 font-semibold mb-2">Тун удахгүй</p>
                            )}

                            {!chair.soon && (
                                <Link href="/Ordermodel" legacyBehavior>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        Захиалах
                                    </button>
                                </Link>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

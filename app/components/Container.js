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
        <div className="bg-gray-200 min-h-screen py-12 pt-36">
            <div className="container mx-auto px-4 max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">Сандлууд</h1>

                <Slider {...settings}>
                    {chairs.map((chair, index) => (
                        <div
                            key={index}
                            className="rounded-2xl shadow-lg overflow-hidden p-4"
                            style={{ backgroundColor: "white" }}
                        >
                            <img
                                src={`${chair.imageUrl}?w=400&h=320&c=fill`}
                                alt={chair.name}
                                className="w-full h-80 object-cover rounded-lg mb-4"
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

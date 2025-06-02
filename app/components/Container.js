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
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748111169/Halada_shop_3_ydujzx.png",
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

    const tables = [
        {
            name: "Оффис Ширээ",
            price: "₮380,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
            available: true,
        },
        {
            name: "Зочны Ширээ",
            price: "₮380,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/44a9f1298c471d1b9fb86fb41e97c7dd_e1gqzd.jpg",
            soon: true,
        },
        {
            name: "Хоолны Ширээ",
            price: "₮380,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/84d70df95b56ee8c9ecb5efa78fe6fef_nuuxyg.jpg",
            soon: true,
        },
        {
            name: "Компютерийн ширээ",
            price: "₮380,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/517799d1b469c599c5b514f6ec07d26d_egx3dw.jpg",
            available: true,
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

    const renderProductSlider = (items, title) => (

        <div className="container mx-auto px-4 max-w-md mb-16">
            <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

            <Slider {...settings}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl shadow-lg overflow-hidden p-4 bg-white"
                    >
                        <img
                            src={`${item.imageUrl}?w=400&h=320&c=fill`}
                            alt={item.name}
                            className="w-full h-80 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                        <p className="text-gray-700 mb-2">{item.price}</p>

                        {item.available && (
                            <p className="text-green-600 font-medium mb-2">Бэлэн</p>
                        )}
                        {item.soon && (
                            <p className="text-red-500 font-semibold mb-2">Тун удахгүй</p>
                        )}

                        {!item.soon && (
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
    );

    return (
        <div className="bg-gray-200 min-h-screen py-12 pt-36">
            {renderProductSlider(chairs, "Сандлууд")}
            {renderProductSlider(tables, "Компютерийн ширээ")}
        </div>
    );
};

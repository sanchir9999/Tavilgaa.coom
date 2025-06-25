"use client";

import Link from "next/link";

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
            price: "₮350,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/807c807c3ca916d25989b04ef6b6e3cb48a0b398160e_Pzl98a188e6d70ec6_jpg_dvwr1c.webp",
            available: false,
        },
        {
            name: "Зочны сандал",
            price: "₮90,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
            available: false,
        },
        {
            name: "Оффис Сандал",
            price: "₮383,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
            available: true,
        },
        {
            name: "Оффис Сандал",
            price: "₮400,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/0050fd0dac735ed9d02f0a370ee23629_jdskuc.jpg",
            available: true,
        },
        {
            name: "Оффис Сандал",
            price: "₮385,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/910cf650c38767dd48acaa39786ebd09_h7epnj.jpg",
            available: true,
        },
        {
            name: "Оффис Сандал",
            price: "₮375,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/be9258e84d4fadc02ba3fb31b9bdfd64_k8saxt.jpg",
            available: true,
        },
        {
            name: "Сургалтын сандал (Хар)",
            price: "₮150,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750854362/e85a6b3f7fd1ee09a4d2989f050f3d64_1_qmeycj.jpg",
            available: true,
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
            available: false,
        },
        {
            name: "Хоолны Ширээ",
            price: "₮380,000",
            imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/84d70df95b56ee8c9ecb5efa78fe6fef_nuuxyg.jpg",
            available: false,
        },
    ];

    const renderProductSlider = (items, title) => (
        <div className="container mx-auto px-2 max-w-7xl mb-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">{title}</h1>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg shadow-sm overflow-hidden p-2 bg-white hover:shadow-md transition min-h-[280px] flex flex-col justify-between"
                    >
                        <img
                            src={`${item.imageUrl}?w=400&h=240&c=fill`}
                            alt={item.name}
                            className="w-full h-36 object-cover rounded-md mb-2"
                        />

                        <div className="mb-2">
                            <h2 className="text-sm font-semibold mb-0.5">{item.name}</h2>
                            <p className="text-gray-700 text-xs mb-1">{item.price}</p>

                            {item.available ? (
                                <p className="text-green-600 font-medium text-xs">Бэлэн</p>
                            ) : (
                                <p className="text-blue-600 font-medium text-xs">5 хоногт Улаанбаатарт ирнэ</p>
                            )}
                        </div>

                        <Link href="/Ordermodel" legacyBehavior>
                            <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700 w-full">
                                Захиалах
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="bg-gray-100 min-h-screen py-8 pt-24">
            {renderProductSlider(chairs, "Сандлууд")}
            {renderProductSlider(tables, "Компютерийн ширээ")}
        </div>
    );
};
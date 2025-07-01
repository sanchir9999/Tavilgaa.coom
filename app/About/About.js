"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
    const { theme } = useTheme();

    return (
        <div
            className={`min-h-screen px-4 sm:px-8 pt-20 transition-colors duration-500
            ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
        >
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-extrabold border-b-4 border-indigo-500 pb-2">
                    Халада Форэвэр ХХК
                </h1>

                <p className="text-lg leading-relaxed">
                    Халада Форэвэр ХХК нь 2024 оны 11 сарын7-нд 100% дотоодын хөрөнгө оруулалтаар байгуулагдсан бөгөөд оффисын тавилгын худалдаа, нийлүүлэлтийн чиглэлээр мэргэшсэн компани юм.
                    Бид орчин үеийн стандарт, чанарт нийцсэн оффисын сандал, ширээг нийлүүлж, харилцагчийн сэтгэл ханамжийг нэн тэргүүнд тавьдаг.
                </p>

                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-indigo-600">Эрхэм зорилго</h2>
                        <p className="leading-relaxed">
                            Монголын бизнесийн салбарт чанартай, тав тухтай оффисын тавилгын шийдлийг нийлүүлж, харилцагчдын бүтээмжийг дэмжих.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-indigo-600">Алсын хараа</h2>
                        <p className="leading-relaxed">
                            Оффисын тавилгын салбарт Монголын хамгийн итгэмжтэй, тэргүүлэгч брэнд болох.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-indigo-600">Үнэт зүйлс</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Харилцагч төвтэй үйлчилгээ</li>
                            <li>Шударга байдал</li>
                            <li>Чанар</li>
                            <li>Багаар ажиллах чадвар</li>
                            <li>Тогтвортой байдал</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 pt-4">
                    <h2 className="text-2xl font-semibold text-indigo-600">Холбоо барих</h2>
                    <p className="leading-relaxed">
                        📍 Хан-Уул дүүрэг, 18 дугаар хороо, Хүннү 2222, 219 байр, B1 давхар
                        <br />
                        📞 Утас:{" "}
                        <a href="tel:+97688175658" className="text-indigo-500 hover:underline">
                            8817 5658, 99983923, 99917208
                        </a>
                        <br />
                        ✉️ Имэйл:{" "}
                        <a href="mailto:info@tavilgaa.com" className="text-indigo-500 hover:underline">
                            info@tavilgaa.com
                        </a>
                        <br />
                        🌐 Вэб:{" "}
                        <a href="https://tavilgaa.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                            tavilgaa.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

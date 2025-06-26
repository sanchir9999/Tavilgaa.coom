"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function About() {
    const { theme } = useTheme();
    const [isLetterOpen, setIsLetterOpen] = useState(false);

    return (
        <div className={`min-h-screen p-8 pt-20 transition-colors duration-500 
            ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>

            <h1 className="text-4xl font-extrabold mb-6 border-b-4 border-indigo-500 pb-2">
                Бидний тухай
            </h1>

            <p className="max-w-3xl leading-relaxed text-lg">
                Манай компани 2024 оны 11 сард 100% дотоодын хөрөнгө оруулалтаар байгууллагдсан бөгөөд оффисын тавилгын худалдаагаар мэргэшсэн.
                <br />
                Харилцагчийн сэтгэл ханамж бол бидний хамгийн чухал зорилго.
                <br />
                <strong>Холбоо барих:</strong> <a href="tel:+97688175658" className="text-indigo-500 hover:underline">8817 5658</a>
                <br />
                <strong>Имэйл:</strong> <a href="mailto:Monhbatsanchir1@gmail.com" className="text-indigo-500 hover:underline">Monhbatsanchir1@gmail.com</a>
            </p>

            {/* 💖 Захидал хэсэг */}
            <div className="mt-12">
                <button
                    onClick={() => setIsLetterOpen(!isLetterOpen)}
                    className="px-6 py-3 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700 transition"
                >
                    {isLetterOpen ? "Хаах" : "💌 Захидал унших"}
                </button>

                <AnimatePresence>
                    {isLetterOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.6 }}
                            className="mt-6 p-6 bg-pink-50 border-l-4 border-pink-500 rounded-xl shadow-lg max-w-2xl"
                        >
                            <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                                Ожикод бичсэн захидал
                            </h2>
                            <p className="text-pink-800 text-base leading-relaxed">
                                Хүндэт Ожикод
                                <br />
                                Бага багаар зүрх сэтгэлийг минь догдлуулж байгаа танд энэ захидлыг бичиж байна.
                                <br />
                                Анх харсан мөчөөс эхлээд багагүй хугацаа өнгөрчээ гэсэн хэдий ч одоо ч таны хажууд сандарч, түгддэг өөрийгөө заримдаа ойлгохгүй юм. 😊
                                <br />
                                Үнсье kiss kiss 😘 Сайхан амрарай
                                <br />
                                <span className="italic text-pink-500">Санчир </span>
                            </p>

                            <div className="mt-4 text-right text-sm text-gray-500">
                                {new Date().toLocaleString("mn-MN", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })} — Улаанбаатар хот
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

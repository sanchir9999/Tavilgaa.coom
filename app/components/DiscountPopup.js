"use client";

import { useState, useEffect } from "react";

export default function DiscountPopup() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isOpen, setIsOpen] = useState(false); // Эхэндээ хаалттай
    const [successMessage, setSuccessMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Хугацаа (жишээ нь 24 цаг = 86400000 миллисекунд)
    const HOURS = 24;
    const MS = HOURS * 60 * 60 * 1000;

    useEffect(() => {
        const popupSeen = localStorage.getItem("popupSeen");
        if (!popupSeen) {
            setIsOpen(true);
        } else {
            const lastSeen = parseInt(popupSeen, 10);
            if (Date.now() - lastSeen > MS) {
                setIsOpen(true);
            }
        }
    }, []);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setIsOpen(false);
                setSuccessMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("popupSeen", Date.now().toString());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, phone }),
        });

        setIsLoading(false);

        if (res.ok) {
            setSuccessMessage(true);
            setEmail("");
            setPhone("");
            localStorage.setItem("popupSeen", Date.now().toString()); // Амжилттай бүртгэл дээр хугацааг хадгалах
        } else {
            alert("Алдаа гарлаа. Дахин оролдоно уу.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 z-50 p-4">
            <div className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto border border-gray-200 dark:border-gray-700">

                <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="absolute top-2 right-4 w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-red-600 text-3xl font-bold transition duration-200"
                >
                    &times;
                </button>

                {!successMessage ? (
                    <>
                        <h2 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4 mt-6">
                            🎁 Бүртгүүлээд 10% хямдрал аваарай!
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Таны имэйл хаяг"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md"
                                disabled={isLoading}
                            />
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Таны утасны дугаар"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className={`w-full py-2 rounded-md font-semibold text-white transition ${isLoading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                disabled={isLoading}
                            >
                                {isLoading ? "Уншиж байна..." : "🎉 Бүртгүүлэх"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-green-600 mb-2">🎉 Амжилттай!</h2>
                        <p className="text-gray-700">Та 10% хямдрал авах эрхтэй боллоо. Баярлалаа!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

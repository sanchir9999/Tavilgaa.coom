"use client";

import { useState, useEffect } from "react";

export default function DiscountPopup() {
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [successMessage, setSuccessMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setIsOpen(false);
                setSuccessMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, address, phone }),
        });

        setIsLoading(false);

        if (res.ok) {
            setSuccessMessage(true);
            setEmail("");
            setAddress("");
            setPhone("");
        } else {
            alert("Алдаа гарлаа. Дахин оролдоно уу.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-50 p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                {!successMessage ? (
                    <>
                        <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
                            🎁 Бүртгүүлээд 10% хямдрал аваарай!
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Таны имэйл хаяг"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                disabled={isLoading}
                            />

                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Таны утасны дугаар"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                        <h2 className="text-xl font-bold text-green-600 mb-2">
                            🎉 Амжилттай!
                        </h2>
                        <p className="text-gray-700">
                            Та 10% хямдрал авах эрхтэй боллоо. Баярлалаа!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

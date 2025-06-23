"use client";

import { useState } from "react";

export default function DiscountPopup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });

        if (res.ok) {
            setSuccessMessage(true);
            setName("");
            setEmail("");
            setTimeout(() => {
                setIsOpen(false); // 3 сек дараа popup хаах
            }, 3000);
        } else {
            alert("Алдаа гарлаа. Дахин оролдоно уу.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
                {!successMessage ? (
                    <>
                        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                            🎁 10% Хямдралаа аваарай!
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Таны нэр"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Таны и-мэйл"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                            >
                                🎉 Бүртгүүлэх
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center animate-fade-in">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            🎉 Бүртгэл амжилттай!
                        </h2>
                        <p className="text-gray-700">
                            Танд баярлалаа! Бид тун удахгүй холбогдох болно.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

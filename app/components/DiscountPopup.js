"use client";

import { useState } from "react";

export default function DiscountPopup() {
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(true); // popup нээгдсэн эсэх

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        if (res.ok) {
            alert("Баярлалаа! Таны бүртгэл амжилттай илгээгдлээ.");
            setEmail("");
            setIsOpen(false);  // popup-ыг хаана
        } else {
            alert("Алдаа гарлаа. Дахин оролдоно уу.");
        }
    };

    if (!isOpen) return null; // Хэрвээ хаасан бол юу ч үзүүлэхгүй

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
            >
                <h2 className="text-xl font-semibold mb-4 text-center">
                    10% Хямдралаа аваарай!
                </h2>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Таны и-мэйл"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                >
                    Бүртгүүлэх
                </button>
            </form>
        </div>
    );
}

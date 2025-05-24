"use client";
import { useState, useEffect } from "react";

export const Ordermodel = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (product) {
            setTotal(quantity * parseInt(product.price.replace(/[₮,]/g, "")));
        }
    }, [quantity, product]);

    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Захиалга</h2>

                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Хэдэн ширхэг:</label>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <p>Нийт үнэ: <span className="font-semibold">{total.toLocaleString()}₮</span></p>
                </div>

                <div className="mb-4">
                    <p className="mb-1 font-medium">QPay (Khaan Bank):</p>
                    {/* Үнийн дүнд таарсан QR-г энд байршуулна */}
                    <img
                        src={`https://api.qpay.mn/qr/${total}`} // Жишээ линк. Та яг Khaan Bank QPay API ашиглах ёстой.
                        alt="QPay QR"
                        className="w-48 h-48 mx-auto"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Болих</button>
                    <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Баталгаажуулах</button>
                </div>
            </div>
        </div>
    );
};

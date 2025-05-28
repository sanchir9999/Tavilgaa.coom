"use client";
import { useState, useEffect } from "react";

export const Ordermodel = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const handleClose = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  // хуудасны эхэнд очих
        onClose();  // модал хаах функцээ дуудах
    };

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

                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-contain rounded-lg mb-4" />


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

                <div className="m-2 text-center">
                    <p className="mb-1 font-medium">QPay (Khaan Bank):</p>
                    <p className="text-lg font-semibold">Дансны дугаар: 5039582920</p>
                    <p className="text-lg">Мөнхбат Санчир</p>
                    <p className="text-lg mt-2">Гүйлгээний утга: Утасны дугаар</p>
                    <p className="mt-6 text-base font-medium text-gray-700">
                        Гүйлгээ хийсний дараа 8817-5658 дугаарт залгаж, мэдэгдэхийг хүсэж байна. Таны гүйлгээ баталгаажих хүртэл хүлээн авна уу.
                    </p>
                </div>
            </div>
        </div>
    );
};

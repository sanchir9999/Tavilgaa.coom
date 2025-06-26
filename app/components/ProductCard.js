// components/ProductCard.jsx
"use client";

export const ProductCard = ({ product, onOrderClick }) => {
    return (
        <div className="border p-4 rounded-xl shadow">
            <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-contain mb-3" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => onOrderClick(product)}
            >
                Захиалах
            </button>
        </div>
    );
};

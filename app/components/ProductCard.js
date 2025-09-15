// components/ProductCard.jsx
"use client";

export const ProductCard = ({ product, onOrderClick }) => {
    return (
        <div className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-lg transition hover:-translate-y-1 overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-contain mb-3 transition-transform duration-300 group-hover:scale-105" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
            <button
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => onOrderClick(product)}
            >
                Захиалах
            </button>
        </div>
    );
};

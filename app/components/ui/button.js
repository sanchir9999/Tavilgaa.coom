"use client";

// Button компонентыг энэ файлд тодорхойлно
export function Button({ variant = "default", size = "default", children, ...props }) {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        destructive: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        default: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]}`}
            {...props}
        >
            {children}
        </button>
    );
}

// Demo page-ийг устгав. Энэ файл зөвхөн Button компонентыг экспортлоно.

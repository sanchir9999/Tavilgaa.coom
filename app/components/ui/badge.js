"use client";

export function Badge({ children, variant = "default", className = "", ...props }) {
    const variants = {
        default: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-100 text-gray-800",
        outline: "border border-blue-600 text-blue-600 bg-white",
    };
    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant] || ""} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

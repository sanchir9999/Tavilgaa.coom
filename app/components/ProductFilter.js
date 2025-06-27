"use client";

export default function ProductFilter({ filters, setFilters, categories = [] }) {
    return (
        <div className="bg-white rounded-md shadow p-4 mb-6 flex flex-wrap gap-4 items-end">
            {/* 🔍 Хайх input */}
            <div className="flex flex-col">
                <label className="text-sm mb-1">Хайх</label>
                <input
                    type="text"
                    placeholder="Бүтээгдэхүүний нэр..."
                    value={filters.search}
                    onChange={(e) =>
                        setFilters({ ...filters, search: e.target.value })
                    }
                    className="border px-3 py-2 rounded w-48"
                />
            </div>

            {/* ✅ Нөөцтэй эсэх */}
            <div className="flex flex-col">
                <label className="text-sm mb-1">Нөөц</label>
                <select
                    value={filters.availability}
                    onChange={(e) =>
                        setFilters({ ...filters, availability: e.target.value })
                    }
                    className="border px-3 py-2 rounded w-40"
                >
                    <option value="all">Бүгд</option>
                    <option value="available">Бэлэн</option>
                    <option value="unavailable">Захиалгаар</option>
                </select>
            </div>

            {/* 💰 Үнэний хүрээ */}
            <div className="flex flex-col">
                <label className="text-sm mb-1">Үнэ (₮)</label>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        placeholder="Доод"
                        value={filters.minPrice}
                        onChange={(e) =>
                            setFilters({ ...filters, minPrice: Number(e.target.value) })
                        }
                        className="border px-2 py-1 rounded w-24"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        placeholder="Дээд"
                        value={filters.maxPrice}
                        onChange={(e) =>
                            setFilters({ ...filters, maxPrice: Number(e.target.value) })
                        }
                        className="border px-2 py-1 rounded w-24"
                    />
                </div>
            </div>

            {/* 🪑 Ангилал (category) */}
            {categories.length > 0 && (
                <div className="flex flex-col">
                    <label className="text-sm mb-1">Ангилал</label>
                    <select
                        value={filters.category}
                        onChange={(e) =>
                            setFilters({ ...filters, category: e.target.value })
                        }
                        className="border px-3 py-2 rounded w-40"
                    >
                        <option value="all">Бүгд</option>
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

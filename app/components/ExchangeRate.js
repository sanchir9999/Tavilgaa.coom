"use client";

import { useEffect, useState } from 'react';

export default function ExchangeRate() {
    const [rate, setRate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://open.er-api.com/v6/latest/USD')
            .then(res => {
                if (!res.ok) throw new Error('Валют ханш авахад алдаа гарлаа');
                return res.json();
            })
            .then(data => setRate(data.rates.MNT))
            .catch(err => {
                console.error(err);
                setError('Валют ханш авахад алдаа гарлаа');
            });
    }, []);

    if (error) return <div className="text-red-500 p-2">{error}</div>;
    if (rate === null) return <div className="p-2">Валют ханш ачаалж байна...</div>;

    return (
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-medium mr-4">
            USD → MNT: {rate}
        </div>
    );
}

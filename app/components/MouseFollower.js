'use client';
import { useState, useEffect } from 'react';

export default function MouseFollower() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            setPos({ x: event.clientX, y: event.clientY });
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: pos.y + 10,
                left: pos.x + 10,
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                pointerEvents: 'none',
                transition: 'top 0.1s ease, left 0.1s ease',
                zIndex: 9999,
            }}
        />
    );
}

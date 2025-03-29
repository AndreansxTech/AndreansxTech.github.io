import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const cursorStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
    };

    return (
        <>
            <div 
                className="cursor-dot"
                style={{
                    ...cursorStyle,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--accent)',
                    borderRadius: '50%',
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transition: 'opacity 0.3s ease',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div 
                className="cursor-outline"
                style={{
                    ...cursorStyle,
                    width: '30px',
                    height: '30px',
                    border: '2px solid var(--accent)',
                    borderRadius: '50%',
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transition: 'transform 0.1s, opacity 0.3s ease',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
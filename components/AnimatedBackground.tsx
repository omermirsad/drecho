
import React, { useState, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
    const [particles, setParticles] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        const newParticles: React.CSSProperties[] = [];
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animation: `float ${20 + Math.random() * 20}s infinite linear`,
                animationDelay: `${Math.random() * -40}s`,
                width: `${1 + Math.random()}px`,
                height: `${1 + Math.random()}px`,
                opacity: 0.1 + Math.random() * 0.2
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] overflow-hidden">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] animate-rotate"></div>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                {particles.map((style, i) => (
                    <div
                        key={i}
                        className="absolute bg-indigo-500 rounded-full"
                        style={style}
                    ></div>
                ))}
            </div>
            <style>{`
            @keyframes float {
                0% { transform: translateY(0); opacity: 0; }
                10%, 90% { opacity: inherit; }
                100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
            }
            `}</style>
        </div>
    );
};

export default AnimatedBackground;

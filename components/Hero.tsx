import React, { useState, useEffect, useRef } from 'react';

const imageUrl = 'https://images.unsplash.com/photo-1593922373711-2a9a811779a1?q=80&w=2940&auto=format&fit=crop';

const Hero: React.FC = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "100px" }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center relative p-4 bg-cover bg-center transition-background-image duration-1000 ease-in-out"
            style={{
                backgroundImage: isIntersecting ? `url(${imageUrl})` : 'none',
                backgroundColor: '#0f0f1a'
            }}
        >
            <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]"></div>
            <div className="text-center max-w-5xl z-10 animate-fadeInUp">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight tracking-tighter">
                    Unveiling the Mysteries of Chiroptera
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 mb-8 font-light">
                    Advanced Bioacoustic Research & Conservation
                </p>
                <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Leading cutting-edge research in bat ecology, ultrasonic communication, and ecosystem services. Our laboratory combines field studies with computational biology to protect these essential nocturnal mammals.
                </p>
                <div className="flex gap-6 justify-center flex-wrap">
                    <a href="#research" className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-xl hover:shadow-indigo-500/40">
                        Explore Research
                    </a>
                    <a href="#ai-assistant" className="px-8 py-3 rounded-full font-semibold text-cyan-400 bg-transparent border-2 border-cyan-400 transition-all duration-300 hover:translate-y-[-3px] hover:bg-cyan-400 hover:text-[#0f0f1a] hover:shadow-lg hover:shadow-cyan-400/30">
                        Ask Dr. Echo AI
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

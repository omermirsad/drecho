import React from 'react';
// FIX: Import Variants type from framer-motion to resolve typing errors with animation properties.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const imageUrl = 'https://images.unsplash.com/photo-1593922373711-2a9a811779a1?q=80&w=2940&auto=format&fit=crop';

const Hero: React.FC = () => {
    const [sectionRef, isImageVisible] = useIntersectionObserver({ rootMargin: "100px" });
    const { scrollYProgress } = useScroll({
        target: { current: sectionRef.current },
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // FIX: Explicitly type animation variants with the Variants type to resolve easing type error.
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center relative p-4 overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: isImageVisible ? `url(${imageUrl})` : 'none',
                    backgroundColor: '#0f0f1a',
                    y
                }}
            />
            <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]"></div>
            <motion.div
                className="text-center max-w-5xl z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight tracking-tighter"
                >
                    Unveiling the Mysteries of Chiroptera
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-xl sm:text-2xl text-slate-300 mb-8 font-light"
                >
                    Advanced Bioacoustic Research & Conservation
                </motion.p>
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Leading cutting-edge research in bat ecology, ultrasonic communication, and ecosystem services. Our laboratory combines field studies with computational biology to protect these essential nocturnal mammals.
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 justify-center flex-wrap"
                >
                    <motion.a
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#research"
                        className="btn-shine px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                    >
                        Explore Research
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#ai-assistant"
                        className="px-8 py-3 rounded-full font-semibold text-cyan-400 bg-transparent border-2 border-cyan-400 transition-colors duration-300 hover:bg-cyan-400 hover:text-[#0f0f1a] hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                        Ask Dr. Echo AI
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

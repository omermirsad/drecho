import React, { useRef } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing errors with animation properties.
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ResearchCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ imageUrl, title, description }) => {
    const [cardRef, isImageVisible] = useIntersectionObserver();
    const divRef = useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const { clientX, clientY } = e;
        const { left, top } = divRef.current.getBoundingClientRect();
        divRef.current.style.setProperty("--x", `${clientX - left}px`);
        divRef.current.style.setProperty("--y", `${clientY - top}px`);
    };

    // FIX: Explicitly type animation variants with the Variants type to resolve easing type error.
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            className="relative h-96 bg-cover bg-center border border-indigo-500/20 rounded-2xl p-8 overflow-hidden group flex flex-col justify-end"
            style={{
                backgroundImage: isImageVisible ? `url(${imageUrl})` : 'none',
                backgroundColor: '#1a1a2e',
            }}
        >
            <div
                ref={divRef}
                onMouseMove={onMouseMove}
                className="absolute inset-0"
            >
                 <style>{`
                    .spotlight-card:hover::before {
                        opacity: 1;
                    }
                    .spotlight-card::before {
                        content: '';
                        position: absolute;
                        left: var(--x, 50%);
                        top: var(--y, 50%);
                        transform: translate(-50%, -50%);
                        width: 400px;
                        height: 400px;
                        background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
                        opacity: 0;
                        transition: opacity 0.5s;
                    }
                `}</style>
                <div className="spotlight-card absolute inset-0"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/70 group-hover:via-black/30"></div>
            <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-bold mb-2 text-slate-100">{title}</h3>
                <p className="text-slate-300 leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

const researchAreas = [
    { imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2874&auto=format&fit=crop", title: "Bioacoustic Analysis", description: "Advanced machine learning algorithms for species identification through echolocation calls. Processing over 10TB of ultrasonic recordings using neural networks." },
    { imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop", title: "Population Genomics", description: "Investigating genetic diversity and adaptation mechanisms in changing climates. Whole-genome sequencing of endangered species for conservation strategies." },
    { imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop", title: "Ecosystem Services", description: "Quantifying the economic value of bat pollination and pest control. Collaborating with agricultural sectors to promote bat-friendly farming practices." },
    { imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop", title: "Disease Ecology", description: "Studying zoonotic disease dynamics and developing predictive models for spillover events. Focus on One Health approaches for pandemic prevention." },
    { imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2940&auto=format&fit=crop", title: "Climate Impact", description: "Assessing how climate change affects migration patterns, hibernation cycles, and range shifts. Long-term monitoring across 50+ field sites globally." },
    { imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop", title: "Urban Ecology", description: "Investigating bat adaptation to urban environments. Developing green infrastructure guidelines for creating bat-friendly cities." },
];

const stats = [
    { number: "1,400+", label: "Bat Species Documented" },
    { number: "85", label: "Research Publications" },
    { number: "23", label: "Conservation Projects" },
    { number: "$2.3M", label: "Research Funding" },
];

const Research: React.FC = () => {
    const [containerRef] = useIntersectionObserver();

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    Research Focus Areas
                </h2>
                <p className="text-lg text-slate-400">Pioneering interdisciplinary approaches to understanding bat ecology</p>
            </div>
            
            <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {researchAreas.map((area, index) => (
                    <ResearchCard key={index} {...area} />
                ))}
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 bg-[rgba(26,26,46,0.5)] rounded-2xl backdrop-blur-md">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            {stat.number}
                        </div>
                        <div className="text-slate-400 text-base">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Research;
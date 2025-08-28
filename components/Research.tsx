import React, { useState, useEffect, useRef } from 'react';

interface ResearchCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ imageUrl, title, description }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className="h-96 bg-cover bg-center border border-indigo-500/20 rounded-2xl p-8 transition-all duration-500 ease-in-out relative overflow-hidden group hover:border-indigo-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col justify-end"
            style={{ 
                backgroundImage: isIntersecting ? `url(${imageUrl})` : 'none',
                backgroundColor: '#1a1a2e'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/70 group-hover:via-black/30"></div>
            <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-bold mb-2 text-slate-100">{title}</h3>
                <p className="text-slate-300 leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {description}
                </p>
            </div>
        </div>
    );
}

const researchAreas = [
    { imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2874&auto=format&fit=crop", title: "Bioacoustic Analysis", description: "Advanced machine learning algorithms for species identification through echolocation calls. Processing over 10TB of ultrasonic recordings using neural networks." },
    { imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop", title: "Population Genomics", description: "Investigating genetic diversity and adaptation mechanisms in changing climates. Whole-genome sequencing of endangered species for conservation strategies." },
    { imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d42e6?q=80&w=2940&auto=format&fit=crop", title: "Ecosystem Services", description: "Quantifying the economic value of bat pollination and pest control. Collaborating with agricultural sectors to promote bat-friendly farming practices." },
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
    return (
        <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    Research Focus Areas
                </h2>
                <p className="text-lg text-slate-400">Pioneering interdisciplinary approaches to understanding bat ecology</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {researchAreas.map((area, index) => (
                    <ResearchCard key={index} {...area} />
                ))}
            </div>

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
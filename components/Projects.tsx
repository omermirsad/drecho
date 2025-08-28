import React, { useState, useEffect, useRef } from 'react';

const imageUrl = 'https://images.unsplash.com/photo-1558006937-548a8a8c88f1?q=80&w=2831&auto=format&fit=crop';

const Projects: React.FC = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    Ongoing Projects
                </h2>
                <p className="text-lg text-slate-400">Driving conservation through targeted research and action</p>
            </div>
            
            <div 
                id="rufford-project"
                ref={sectionRef}
                className="grid md:grid-cols-2 gap-12 items-center bg-[rgba(26,26,46,0.5)] p-8 rounded-2xl border border-indigo-500/20 backdrop-blur-md"
            >
                <div 
                    className="h-96 rounded-lg bg-cover bg-center transition-all duration-1000 ease-in-out"
                    style={{
                        backgroundImage: isIntersecting ? `url(${imageUrl})` : 'none',
                        backgroundColor: '#1a1a2e'
                    }}
                ></div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">The Rufford Bat Conservation Project</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        Funded by The Rufford Foundation, this project focuses on critical habitat preservation for endangered bat species in Southeast Asia. We employ community-based monitoring and satellite imagery to track deforestation and promote sustainable land-use practices.
                    </p>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Key Outcomes:</h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                        <li>Protected over 5,000 hectares of primary forest.</li>
                        <li>Trained 50+ local conservation officers in bioacoustic monitoring.</li>
                        <li>Developed a new policy brief for regional governments on bat-friendly agriculture.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React, { useState, useEffect, useRef } from 'react';

const imageUrl = 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2940&auto=format&fit=crop';

const AboutMe: React.FC = () => {
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
        <section id="about-me" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div 
                ref={sectionRef}
                className="grid md:grid-cols-5 gap-12 items-center"
            >
                <div 
                    className="md:col-span-2 h-96 md:h-full w-full rounded-2xl bg-cover bg-center transition-all duration-1000 ease-in-out border border-indigo-500/20 shadow-lg shadow-indigo-500/10"
                    style={{
                        backgroundImage: isIntersecting ? `url(${imageUrl})` : 'none',
                        backgroundColor: '#1a1a2e',
                        backgroundPosition: 'center top'
                    }}
                ></div>
                <div className="md:col-span-3">
                     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Meet Dr. Anya M. Echo
                    </h2>
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                        A leading chiropterologist with over 15 years of experience, Dr. Echo has dedicated her career to understanding the complex world of bats. Her passion was sparked during a field study in the Amazon rainforest, and she has since led groundbreaking research on every continent where bats reside. Dr. Echo holds a Ph.D. in Conservation Biology from the University of Cambridge.
                    </p>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Mission & Philosophy</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        "My mission is to bridge the gap between advanced scientific research and effective conservation action. I believe in a 'One Health' approach, recognizing that the well-being of bats is intrinsically linked to the health of ecosystems and human populations. Through open collaboration, technological innovation, and public education, we can ensure these extraordinary animals thrive for generations to come."
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Conservation Biology</span>
                         <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Bioacoustics</span>
                         <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Genomics</span>
                         <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Public Outreach</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

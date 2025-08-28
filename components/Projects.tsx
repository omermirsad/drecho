import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  images: string[];
}

const projectsData: Project[] = [
  {
    id: 'rufford',
    title: 'The Rufford Bat Conservation Project',
    description: 'Funded by The Rufford Foundation, this project focuses on critical habitat preservation for endangered bat species in Southeast Asia. We employ community-based monitoring and satellite imagery to track deforestation and promote sustainable land-use practices.',
    outcomes: [
      'Protected over 5,000 hectares of primary forest.',
      'Trained 50+ local conservation officers in bioacoustic monitoring.',
      'Developed a new policy brief for regional governments on bat-friendly agriculture.',
    ],
    images: [
      'https://images.unsplash.com/photo-1558006937-548a8a8c88f1?q=80&w=2831&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518979840397-3ba071190544?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620356241843-752938171f2a?q=80&w=2874&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594917452839-8a476101966a?q=80&w=2940&auto=format&fit=crop',
    ],
  },
  {
    id: 'urban-bat',
    title: 'Urban Bat Adaptation Initiative',
    description: 'This initiative investigates how various bat species adapt to urban and suburban environments. We are developing guidelines for city planners to create more bat-friendly urban ecosystems, including safe roosting sites and light-pollution reduction strategies.',
    outcomes: [
        'Identified key architectural features that promote urban bat roosting.',
        'Published a "Bat-Friendly City" guide for municipal governments.',
        'Established a citizen science network for monitoring urban bat populations across 10 cities.',
    ],
    images: [
        'https://images.unsplash.com/photo-1570773636912-b67938a4a5a7?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601625906385-d85e7b25eda7?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560124996-0639d443a58b?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop'
    ],
  }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [sectionRef, isVisible] = useIntersectionObserver();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + newDirection;
            if (newIndex < 0) return project.images.length - 1;
            if (newIndex >= project.images.length) return 0;
            return newIndex;
        });
    };
    
    return (
        <div 
            id={project.id}
            ref={sectionRef}
            className="grid md:grid-cols-2 gap-12 items-center bg-[rgba(26,26,46,0.5)] p-8 rounded-2xl border border-indigo-500/20 backdrop-blur-md"
        >
            <div className="relative h-96 rounded-lg overflow-hidden bg-[#1a1a2e]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={currentIndex}
                        src={isVisible ? project.images[currentIndex] : ''}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                        className="absolute h-full w-full object-cover"
                        alt={`${project.title} Image ${currentIndex + 1}`}
                        loading="lazy"
                    />
                </AnimatePresence>
                <button onClick={() => paginate(-1)} className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors z-10">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button onClick={() => paginate(1)} className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors z-10">
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {project.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-slate-100 mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                </p>
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">Key Outcomes:</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                    {project.outcomes.map((outcome, index) => <li key={index}>{outcome}</li>)}
                </ul>
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    Ongoing Projects
                </h2>
                <p className="text-lg text-slate-400">Driving conservation through targeted research and action</p>
            </div>
            
            <div className="space-y-16">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </section>
    );
};

export default Projects;
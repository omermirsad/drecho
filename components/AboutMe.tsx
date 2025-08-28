import React from 'react';
// FIX: Import Variants type from framer-motion to resolve typing errors with animation properties.
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const imageUrl = 'https://images.unsplash.com/photo-1580852300654-034f80c65b1d?q=80&w=2787&auto=format&fit=crop';

const AboutMe: React.FC = () => {
    const [sectionRef, isImageVisible] = useIntersectionObserver();

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // FIX: Explicitly type animation variants with the Variants type to resolve easing type error.
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="about-me" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div 
                ref={sectionRef}
                className="grid md:grid-cols-5 gap-12 items-center"
            >
                <motion.div 
                    className="md:col-span-2 h-96 md:h-full w-full rounded-2xl bg-cover bg-center border border-indigo-500/20 shadow-lg shadow-indigo-500/10"
                    style={{
                        backgroundImage: isImageVisible ? `url(${imageUrl})` : 'none',
                        backgroundColor: '#1a1a2e',
                        backgroundPosition: 'center top'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <motion.div
                    className="md:col-span-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                     <motion.h2 variants={itemVariants} className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Meet Dr. Anya M. Echo
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-slate-300 mb-6 leading-relaxed text-lg">
                        A leading chiropterologist with over 15 years of experience, Dr. Echo has dedicated her career to understanding the complex world of bats. Her passion was sparked during a field study in the Amazon rainforest, and she has since led groundbreaking research on every continent where bats reside. Dr. Echo holds a Ph.D. in Conservation Biology from the University of Cambridge.
                    </motion.p>
                    <motion.h3 variants={itemVariants} className="text-2xl font-bold text-cyan-400 mb-4">Mission & Philosophy</motion.h3>
                    <motion.p variants={itemVariants} className="text-slate-400 mb-6 leading-relaxed">
                        "My mission is to bridge the gap between advanced scientific research and effective conservation action. I believe in a 'One Health' approach, recognizing that the well-being of bats is intrinsically linked to the health of ecosystems and human populations. Through open collaboration, technological innovation, and public education, we can ensure these extraordinary animals thrive for generations to come."
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                        <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Conservation Biology</span>
                         <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Bioacoustics</span>
                         <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Genomics</span>
                         <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">Public Outreach</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
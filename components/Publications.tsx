import React, { useState } from 'react';
// FIX: Import Variants type from framer-motion to resolve typing errors with animation properties.
import { motion, Variants } from 'framer-motion';
import { Publication } from '../types';
import Modal from './Modal';

const publications: Publication[] = [
    { title: "Neural basis of echolocation in bats: A comprehensive review", authors: "Echo, A.M., Smith, J.K., Chen, L.", journal: "Nature Reviews Neuroscience, 2024", fullTextLink: "#" },
    { title: "Global patterns of bat diversity loss in the Anthropocene", authors: "Echo, A.M., Rodriguez, M., Patel, S.", journal: "Science, 2024", fullTextLink: "#" },
    { title: "Machine learning approaches for automated bat call identification", authors: "Echo, A.M., Thompson, R., Lee, K.", journal: "Methods in Ecology and Evolution, 2024", fullTextLink: "#" },
    { title: "Economic valuation of ecosystem services provided by insectivorous bats", authors: "Echo, A.M., Williams, D., Garcia, P.", journal: "Ecological Economics, 2023", fullTextLink: "#" },
];

const Publications: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

    const handleOpenModal = (pub: Publication) => {
        setSelectedPub(pub);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // FIX: Explicitly type animation variants with the Variants type to resolve easing type error.
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <>
            <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Recent Publications
                    </h2>
                    <p className="text-lg text-slate-400">Contributing to the global understanding of chiropteran biology</p>
                </div>
                
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {publications.map((pub, index) => (
                        <motion.button
                            key={index}
                            variants={itemVariants}
                            whileHover={{ x: 8, backgroundColor: 'rgba(26,26,46,0.8)' }}
                            onClick={() => handleOpenModal(pub)}
                            className="w-full text-left bg-[rgba(26,26,46,0.5)] border-l-4 border-indigo-500 p-6 rounded-lg shadow-lg shadow-indigo-500/10"
                        >
                            <h3 className="text-lg font-semibold text-slate-100 mb-2">{pub.title}</h3>
                            <p className="text-cyan-400 mb-2">{pub.authors}</p>
                            <p className="text-slate-400 italic">{pub.journal}</p>
                        </motion.button>
                    ))}
                </motion.div>
            </section>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedPub && (
                    <div className="text-slate-200">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            {selectedPub.title}
                        </h2>
                        <p className="text-lg text-cyan-400 mb-2">{selectedPub.authors}</p>
                        <p className="text-base text-slate-400 italic mb-8">{selectedPub.journal}</p>
                        <motion.a
                            href={selectedPub.fullTextLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block btn-shine px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                        >
                            Read Full Text
                        </motion.a>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Publications;

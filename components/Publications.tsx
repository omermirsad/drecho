import React, { useState } from 'react';
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
        setSelectedPub(null);
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
                
                <div className="space-y-6">
                    {publications.map((pub, index) => (
                        <div 
                            key={index} 
                            className="bg-[rgba(26,26,46,0.5)] border-l-4 border-indigo-500 p-6 rounded-lg transition-all duration-300 hover:bg-[rgba(26,26,46,0.8)] hover:translate-x-2 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
                            onClick={() => handleOpenModal(pub)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(pub)}
                        >
                            <h3 className="text-lg font-semibold text-slate-100 mb-2">{pub.title}</h3>
                            <p className="text-cyan-400 mb-2">{pub.authors}</p>
                            <p className="text-slate-400 italic">{pub.journal}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedPub && (
                    <div className="text-slate-200">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            {selectedPub.title}
                        </h2>
                        <p className="text-lg text-cyan-400 mb-2">{selectedPub.authors}</p>
                        <p className="text-base text-slate-400 italic mb-8">{selectedPub.journal}</p>
                        <a 
                            href={selectedPub.fullTextLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-indigo-500/40"
                        >
                            Read Full Text
                        </a>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Publications;
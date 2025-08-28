
import React from 'react';

const publications = [
    { title: "Neural basis of echolocation in bats: A comprehensive review", authors: "Echo, A.M., Smith, J.K., Chen, L.", journal: "Nature Reviews Neuroscience, 2024" },
    { title: "Global patterns of bat diversity loss in the Anthropocene", authors: "Echo, A.M., Rodriguez, M., Patel, S.", journal: "Science, 2024" },
    { title: "Machine learning approaches for automated bat call identification", authors: "Echo, A.M., Thompson, R., Lee, K.", journal: "Methods in Ecology and Evolution, 2024" },
    { title: "Economic valuation of ecosystem services provided by insectivorous bats", authors: "Echo, A.M., Williams, D., Garcia, P.", journal: "Ecological Economics, 2023" },
];

const Publications: React.FC = () => {
    return (
        <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    Recent Publications
                </h2>
                <p className="text-lg text-slate-400">Contributing to the global understanding of chiropteran biology</p>
            </div>
            
            <div className="space-y-6">
                {publications.map((pub, index) => (
                    <div key={index} className="bg-[rgba(26,26,46,0.5)] border-l-4 border-indigo-500 p-6 rounded-lg transition-all duration-300 hover:bg-[rgba(26,26,46,0.8)] hover:translate-x-2 hover:shadow-lg hover:shadow-indigo-500/20">
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">{pub.title}</h3>
                        <p className="text-cyan-400 mb-2">{pub.authors}</p>
                        <p className="text-slate-400 italic">{pub.journal}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
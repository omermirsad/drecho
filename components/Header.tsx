
import React, { useState, useEffect } from 'react';
import { BatLogoIcon } from './Icons';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "text-slate-400 font-medium relative transition-colors duration-300 hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

    return (
        <header
            id="header"
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
                scrolled
                    ? 'py-2 bg-[rgba(15,15,26,0.95)] backdrop-blur-lg shadow-2xl shadow-black/30 border-b border-indigo-500/20'
                    : 'py-4 bg-[rgba(15,15,26,0.8)] backdrop-blur-lg border-b border-indigo-500/10'
            }`}
        >
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a href="#" className="flex items-center gap-4 text-xl font-bold text-indigo-400 transition-transform duration-300 hover:scale-105">
                    <BatLogoIcon />
                    <span className="hidden sm:inline">Dr. Echo Research Lab</span>
                </a>
                <ul className="hidden md:flex items-center gap-8 list-none">
                    <li><a href="#research" className={navLinkClasses}>Research</a></li>
                    <li><a href="#publications" className={navLinkClasses}>Publications</a></li>
                    
                    <li className="relative group">
                        <a href="#projects" className={navLinkClasses}>
                            Projects
                        </a>
                        <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[rgba(22,33,62,0.9)] backdrop-blur-lg border border-indigo-500/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            <li>
                                <a href="#rufford-project" className="block px-4 py-3 text-slate-300 hover:bg-indigo-500/20 hover:text-cyan-400 rounded-lg transition-colors duration-200">
                                    Rufford Project
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li><a href="#ai-assistant" className={navLinkClasses}>AI Assistant</a></li>
                    <li><a href="#contact" className={navLinkClasses}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
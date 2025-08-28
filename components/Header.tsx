
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

    const navLinks = [
        { name: 'Research', href: '#research' },
        { name: 'Publications', href: '#publications' },
        { name: 'AI Assistant', href: '#ai-assistant' },
        { name: 'Contact', href: '#contact' },
    ];

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
                <ul className="hidden md:flex gap-8 list-none">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-slate-400 font-medium relative transition-colors duration-300 hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

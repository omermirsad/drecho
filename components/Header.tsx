
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BatLogoIcon } from './Icons';

const Header: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const navLinkClasses = "text-slate-400 font-medium relative transition-colors duration-300 hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

    const paddingTop = useTransform(scrollYProgress, [0, 0.1], ["1rem", "0.5rem"]);
    const paddingBottom = useTransform(scrollYProgress, [0, 0.1], ["1rem", "0.5rem"]);
    const borderColor = useTransform(scrollYProgress, [0, 0.1], ["rgba(129, 140, 248, 0.1)", "rgba(129, 140, 248, 0.2)"]);
    const boxShadow = useTransform(scrollYProgress, [0, 0.1], ["none", "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"]);

    return (
        <header id="header" className="fixed top-0 w-full z-50">
            <motion.div
                className="bg-[rgba(15,15,26,0.8)] backdrop-blur-lg border-b border-indigo-500/10"
                style={{
                    paddingTop,
                    paddingBottom,
                    borderColor,
                    boxShadow,
                }}
            >
                <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <a href="#" onClick={(e) => handleNavClick(e, 'root')} className="flex items-center gap-4 text-xl font-bold text-indigo-400 transition-transform duration-300 hover:scale-105">
                        <BatLogoIcon />
                        <span className="hidden sm:inline">Dr. Echo Research Lab</span>
                    </a>
                    <ul className="hidden md:flex items-center gap-8 list-none">
                        <li><a href="#research" onClick={(e) => handleNavClick(e, 'research')} className={navLinkClasses}>Research</a></li>
                        <li><a href="#about-me" onClick={(e) => handleNavClick(e, 'about-me')} className={navLinkClasses}>About Me</a></li>
                        <li><a href="#publications" onClick={(e) => handleNavClick(e, 'publications')} className={navLinkClasses}>Publications</a></li>
                        
                        <li className="relative group">
                            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={navLinkClasses}>
                                Projects
                            </a>
                        </li>

                        <li><a href="#ai-assistant" onClick={(e) => handleNavClick(e, 'ai-assistant')} className={navLinkClasses}>Dr. Echo AI</a></li>
                        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={navLinkClasses}>Contact</a></li>
                    </ul>
                </nav>
            </motion.div>
            <motion.div className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left" style={{ scaleX: scrollYProgress }} />
        </header>
    );
};

export default Header;

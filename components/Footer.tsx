
import React from 'react';
import { SocialLinkIcon } from './Icons';

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/", path: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-11 14H5v-7h3v7zm-1.5-8c-.97 0-1.75-.78-1.75-1.75S5.53 5.5 6.5 5.5s1.75.78 1.75 1.75S7.47 9 6.5 9zm11.5 8h-3v-3.5c0-1.33-.47-2.24-1.66-2.24-.91 0-1.45.61-1.69 1.2-.09.21-.11.5-.11.79V17h-3s.04-7 0-7.72h3v1.09c.44-.68 1.23-1.65 3-1.65 2.19 0 3.83 1.43 3.83 4.51V17z" },
    { name: "Twitter", href: "https://www.twitter.com/", path: "M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.83 1.16 4 1.84 6.36 1.84 7.62 0 11.79-6.3 11.79-11.79v-.53c.81-.59 1.51-1.32 2.07-2.16z" },
    { name: "GitHub", href: "https://www.github.com/", path: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" },
];

const Footer: React.FC = () => {
    const inputStyles = "w-full px-4 py-3 bg-[rgba(15,15,26,0.8)] border border-indigo-500/20 rounded-lg text-slate-200 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50";

    return (
        <footer id="contact" className="bg-[#0f0f1a] pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-indigo-500/20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
                <div className="md:col-span-2">
                    <div className="footer-section mb-8">
                        <h3 className="text-xl font-bold text-indigo-400 mb-4">Contact Information</h3>
                        <p className="text-slate-400">Dr. A.M. Echo</p>
                        <p className="text-slate-400">Department of Environmental Sciences</p>
                        <a href="mailto:echo@chiroptera-research.org" className="text-slate-400 transition-colors hover:text-cyan-400">echo@chiroptera-research.org</a>
                        <p className="text-slate-400">+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="footer-section">
                        <h3 className="text-xl font-bold text-indigo-400 mb-4">Research Affiliations</h3>
                        <p className="text-slate-400">International Bat Conservation Alliance</p>
                        <p className="text-slate-400">Global Chiroptera Research Network</p>
                        <p className="text-slate-400">Wildlife Disease Association</p>
                    </div>
                </div>
                
                <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-indigo-400 mb-4">Get in Touch</h3>
                     <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className={inputStyles} />
                            <input type="email" placeholder="Your Email" className={inputStyles} />
                        </div>
                        <textarea placeholder="Your Message" rows={4} className={`${inputStyles} resize-none`}></textarea>
                        <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40">
                            Submit
                        </button>
                    </form>

                    <h3 className="text-xl font-bold text-indigo-400 mb-4 mt-8">Connect</h3>
                    <div className="flex gap-4">
                        {socialLinks.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/30 rounded-full flex items-center justify-center text-slate-300 transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
                            >
                                <SocialLinkIcon path={link.path} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center text-slate-500 mt-16 pt-8 border-t border-indigo-500/10">
                <p>&copy; {new Date().getFullYear()} Dr. Echo Research Lab. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

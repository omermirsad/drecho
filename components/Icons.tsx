
import React from 'react';

export const BatLogoIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 filter drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse-slow">
        <path d="M12 2C9 2 6 3 3 5L2 6V12L3 13H5V15L6 16V20L7 21H17L18 20V16L19 15V13H21L22 12V6L21 5C18 3 15 2 12 2M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4Z"/>
    </svg>
);

export const AiAvatarIcon: React.FC = () => (
    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h.5a1.5 1.5 0 010 3h-.5a1 1 0 00-1 1v1.5a1.5 1.5 0 01-3 0V10a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3h.5a1 1 0 001-1V3.5zM10 12.5a1.5 1.5 0 013 0V13a1 1 0 001 1h.5a1.5 1.5 0 010 3h-.5a1 1 0 00-1 1v1.5a1.5 1.5 0 01-3 0V17a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3h.5a1 1 0 001-1v-1.5z" />
            <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
        </svg>
    </div>
);


export const ResearchIconBioacoustic: React.FC = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z"/>
    </svg>
);

export const ResearchIconGenomics: React.FC = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
);

export const ResearchIconEcosystem: React.FC = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
);

export const ResearchIconDisease: React.FC = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6v-2h12v2zm0-4H6v-2h12v2zm-2-4H8v-2h8v2z"/>
    </svg>
);

export const ResearchIconClimate: React.FC = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
    </svg>
);

export const ResearchIconUrban: React.FC = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
);

export const SocialLinkIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d={path}/>
    </svg>
);
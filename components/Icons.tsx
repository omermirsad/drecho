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


export const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export const SocialLinkIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d={path}/>
    </svg>
);
import React from 'react';

interface SocialLinkProps {
    href: string;
    icon: React.ReactElement;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
    // Pass icon color via className prop from parent
    const coloredIcon = React.cloneElement(icon, { size: 16 }); 
    return (
        <a
            href={href}
            className="p-2 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-200 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ring"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            {/* Apply color class to icon via cloneElement */} 
            {coloredIcon}
        </a>
    );
};

export default SocialLink; 
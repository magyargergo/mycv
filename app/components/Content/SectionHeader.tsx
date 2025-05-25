'use client';

import React, { useState, useEffect } from 'react';

interface SectionHeaderProps {
  icon: React.ReactElement;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
  const [iconSize, setIconSize] = useState(18);

  useEffect(() => {
    // Handle icon size based on screen orientation and size
    const updateIconSize = () => {
      if (window.matchMedia('(max-width: 767px) and (orientation: landscape)').matches) {
        setIconSize(14);
      } else if (
        window.matchMedia('(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)')
          .matches
      ) {
        setIconSize(16);
      } else {
        setIconSize(18);
      }
    };

    // Initial update
    updateIconSize();

    // Add event listeners for resize and orientation change
    window.addEventListener('resize', updateIconSize);
    window.addEventListener('orientationchange', updateIconSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateIconSize);
      window.removeEventListener('orientationchange', updateIconSize);
    };
  }, []);

  return (
    <div className="flex items-center mb-5 mobile-landscape:mb-3 tablet-landscape:mb-4 md:mb-6 lg:mb-8 pb-2 mobile-landscape:pb-1.5 tablet-landscape:pb-2 md:pb-2.5 lg:pb-3 border-b border-border/70 group reduced-margin-landscape">
      <div className="flex items-center justify-center w-8 h-8 mobile-landscape:w-7 mobile-landscape:h-7 tablet-landscape:w-8 tablet-landscape:h-8 md:w-9 md:h-9 rounded-full bg-primary/10 text-primary mr-2.5 mobile-landscape:mr-2 tablet-landscape:mr-2.5 md:mr-3 lg:mr-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm">
        {React.cloneElement(icon, { size: iconSize })}
      </div>
      <h2 className="text-lg mobile-landscape:text-base tablet-landscape:text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;

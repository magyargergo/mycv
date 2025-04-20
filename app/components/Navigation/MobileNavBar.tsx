'use client';

import React from 'react';
import { NAV_ITEMS } from './NavItems';
import { SectionType } from '../types';
import { ThemeToggle } from '@/theme/toggle';
import { customComponents } from '@/theme/config';

interface MobileNavBarProps {
    onSelectSection: (section: SectionType) => void;
    selectedSection: SectionType;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ onSelectSection, selectedSection }) => {
    return (
        <>
            {/* Theme toggle with scrollbar-aware positioning */}
            <div className={customComponents.themeToggleContainer}>
                <ThemeToggle />
            </div>
            
            {/* Mobile bottom navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg sm:hidden z-50 pb-safe">
                <div className="flex justify-between items-center">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = selectedSection === item.section;

                        return (
                            <button
                                key={item.section}
                                onClick={() => onSelectSection(item.section)}
                                className={`
                                    flex-1 py-3 flex flex-col items-center transition-colors duration-150
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white
                                    ${isActive ? 'bg-primary/90' : 'hover:bg-primary/80'}
                                `}
                                aria-label={item.label}
                                style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                                <Icon
                                    className="mb-1"
                                    size={isActive ? 20 : 18}
                                />
                                <span className="text-xs">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default MobileNavBar;
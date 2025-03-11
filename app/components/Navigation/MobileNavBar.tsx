'use client';

import React from 'react';
import { NAV_ITEMS } from './NavItems';
import { SectionType } from '../types';

interface MobileNavBarProps {
    onSelectSection: (section: SectionType) => void;
    selectedSection: SectionType;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ onSelectSection, selectedSection }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white shadow-lg sm:hidden z-50 pb-safe">
            <div className="flex justify-between">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = selectedSection === item.section;

                    return (
                        <button
                            key={item.section}
                            onClick={() => onSelectSection(item.section)}
                            className={`
                                flex-1 py-3 flex flex-col items-center
                                ${isActive ? 'bg-blue-700' : ''}
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
    );
};

export default MobileNavBar;
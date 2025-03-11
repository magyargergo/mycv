'use client';

import React from 'react';
import { Tooltip } from 'flowbite-react';
import { NAV_ITEMS } from './NavItems';
import { SectionType } from '../types';

interface SidebarProps {
    onSelectSection: (section: SectionType) => void;
    selectedSection: SectionType;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectSection, selectedSection }) => {
    return (
        <aside className="fixed top-0 left-0 h-full bg-blue-600 text-white hidden sm:flex flex-col w-[60px] z-50 shadow-lg">
            {/* Logo Area */}
            <div className="flex justify-center items-center h-16 border-b border-blue-500/30">
                <div className="text-white font-bold text-xl">GM</div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col items-center pt-8 space-y-6">
                {NAV_ITEMS.map((item) => (
                    <Tooltip
                        key={item.section}
                        content={item.label}
                        placement="right"
                        style="light"
                    >
                        <button
                            onClick={() => onSelectSection(item.section)}
                            className={`
                                w-full flex justify-center p-3
                                ${selectedSection === item.section ? 'bg-blue-700' : 'hover:bg-blue-700/70'}
                                transition-colors
                            `}
                            aria-label={item.label}
                        >
                            <item.icon
                                size={20}
                                className={selectedSection === item.section ? 'text-white' : 'text-blue-200'}
                            />
                        </button>
                    </Tooltip>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;

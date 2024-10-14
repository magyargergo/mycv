"use client";

import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SidebarProps {
    onSelectSection: (section: string) => void;
    selectedSection: string;
}

// Define the menu items
const menuItems = [
    { label: 'About', icon: <FaUser size={24} />, section: 'about' },
    { label: 'Experience', icon: <FaBriefcase size={24} />, section: 'experience' },
    { label: 'Education', icon: <FaGraduationCap size={24} />, section: 'education' },
];

const Sidebar: React.FC<SidebarProps> = ({ onSelectSection, selectedSection }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const buttonBaseClasses = "relative flex items-center w-full p-4 overflow-hidden";

    return (
        <aside className={`fixed top-0 left-0 h-full bg-blue-800 pt-4 text-white transition-all ${isCollapsed ? 'w-16' : 'w-40'}`}>
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex items-center justify-center w-full mb-4 text-xl"
            >
                {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>

            {/* Menu Items */}
            {menuItems.map((item) => (
                <div key={item.section} className="relative group">
                    <button
                        onClick={() => onSelectSection(item.section)}
                        className={buttonBaseClasses}
                    >
                        {selectedSection === item.section && (
                            <div
                                className="absolute inset-0 bg-blue-600 z-0 transition duration-300"
                            />
                        )}
                        <div className="z-10">{item.icon}</div>
                        {!isCollapsed && <span className="ml-4 z-10">{item.label}</span>}
                    </button>

                    {/* Tooltip */}
                    {isCollapsed && (
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <div className="relative">
                                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-lg shadow-md whitespace-no-wrap">
                                    {item.label}
                                </span>
                                <span className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-blue-600"></span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;

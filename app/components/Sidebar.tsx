"use client";

import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SidebarProps {
    onSelectSection: (section: string) => void;
    selectedSection: string;
}

const menuItems = [
    { label: 'About', icon: <FaUser />, section: 'about' },
    { label: 'Experience', icon: <FaBriefcase />, section: 'experience' },
    { label: 'Education', icon: <FaGraduationCap />, section: 'education' },
];

const Sidebar: React.FC<SidebarProps> = ({ onSelectSection, selectedSection }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside className={`fixed top-0 left-0 h-full bg-blue-800 text-white transition-all duration-300 ease-in-out z-10
            ${isCollapsed ? 'w-16' : 'w-72'}
            hidden sm:block sm:w-16 md:w-48 lg:w-64 xl:w-72`}>
            <div className="flex flex-col h-full">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex items-center justify-center h-16 hover:bg-blue-700 transition-colors lg:hidden"
                >
                    {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>

                <nav className="flex-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.section}
                            onClick={() => onSelectSection(item.section)}
                            className={`flex items-center w-full p-4 hover:bg-blue-700 transition-colors
                                ${selectedSection === item.section ? 'bg-blue-600' : ''}
                                ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                        >
                            <div className="text-xl">{item.icon}</div>
                            <span className={`ml-4 text-sm ${isCollapsed ? 'hidden' : 'hidden md:inline'}`}>
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
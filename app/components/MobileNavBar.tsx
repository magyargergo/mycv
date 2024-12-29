"use client";

import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SectionType } from "@/components/Section";

interface MobileNavBarProps {
    onSelectSection: (section: SectionType) => void;
    selectedSection: SectionType;
}

const menuItems: readonly {
    label: string;
    icon: React.ElementType;
    section: SectionType;
}[]= [
    { label: 'About', icon: FaUser, section: 'about' },
    { label: 'Experience', icon: FaBriefcase, section: 'experience' },
    { label: 'Education', icon: FaGraduationCap, section: 'education' },
];

const MobileNavBar: React.FC<MobileNavBarProps> = ({ onSelectSection, selectedSection }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-blue-800 text-white shadow-lg lg:hidden">
            <div className="max-w-md mx-auto px-4">
                <ul className="flex justify-between items-center">
                    {menuItems.map((item) => (
                        <li key={item.section} className="flex-1">
                            <button
                                onClick={() => onSelectSection(item.section)}
                                className={`w-full py-3 px-2 flex flex-col items-center transition-colors duration-200 ${
                                    selectedSection === item.section
                                        ? 'text-blue-300'
                                        : 'text-white hover:text-blue-200'
                                }`}
                            >
                                <item.icon className="mb-1" size={20} />
                                <span className="text-xs font-medium">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default MobileNavBar;
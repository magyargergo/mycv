'use client';

import React from 'react';

interface SectionHeaderProps {
    icon: React.ReactElement;
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
    return (
        <div className="flex items-center mb-6 pb-2 border-b border-gray-100">
            <div className="text-blue-600 mr-3">
                {React.cloneElement(icon, { size: 22 })}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;

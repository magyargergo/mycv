"use client";

import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';

interface SectionProps {
    selectedSection: string;
}

const Section: React.FC<SectionProps> = ({ selectedSection }) => {
    const renderSection = () => {
        switch (selectedSection) {
            case 'education':
                return <Education />;
            case 'experience':
                return <Experience />;
            default:
                return <About />;
        }
    };

    return (
        <div
            key={selectedSection}
            className="flex flex-1"
        >
            {renderSection()}
        </div>
    );
};

export default Section;
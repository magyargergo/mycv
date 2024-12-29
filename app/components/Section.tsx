"use client";

import React from 'react';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import { SectionData } from "@/page";

export type SectionType = 'about' | 'education' | 'experience';

interface SectionProps {
    selectedSection: SectionType;
    initialData: SectionData;
}

const Section: React.FC<SectionProps> = ({
    selectedSection,
    initialData,
}) => {
    const renderSection = () => {
        switch (selectedSection) {
            case 'education':
                return <Education data={initialData[selectedSection]} />;
            case 'experience':
                return <Experience data={initialData[selectedSection]} />;
            default:
                return <About data={initialData[selectedSection]} />;
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
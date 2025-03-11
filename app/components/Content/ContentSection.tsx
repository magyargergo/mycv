'use client';

import React, { useEffect } from 'react';
import EducationSection from "./Sections/EducationSection";
import ExperienceSection from "./Sections/ExperienceSection";
import AboutSection from "./Sections/AboutSection";
import { SectionData } from "@/page";
import { SectionType } from "@/components/types";

interface SectionProps {
    selectedSection: SectionType;
    initialData: SectionData;
}

const ContentSection: React.FC<SectionProps> = ({
    selectedSection,
    initialData,
}) => {
    // Create mapping of section types to components
    const sectionComponents = {
        'about': <AboutSection data={initialData.about} />,
        'experience': <ExperienceSection data={initialData.experience} />,
        'education': <EducationSection data={initialData.education} />
    };

    // Force vertical scrollbar only
    useEffect(() => {
        // Add CSS to force vertical scrollbar only
        const style = document.createElement('style');
        style.textContent = `
            html {
                overflow-x: hidden;
                overflow-y: scroll;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Render only the current section, allowing natural height
    return (
        <div className="w-full transition-all duration-300 ease-in-out">
            {sectionComponents[selectedSection]}
        </div>
    );
};

export default ContentSection;
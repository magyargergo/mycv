'use client';

import React from 'react';
import EducationSection from './Sections/EducationSection';
import ExperienceSection from './Sections/ExperienceSection';
import AboutSection from './Sections/AboutSection';
import { SectionData } from '@/site/page';
import { SectionType } from '@/components/types';

interface SectionProps {
  selectedSection: SectionType;
  initialData: SectionData;
}

const ContentSection: React.FC<SectionProps> = ({ selectedSection, initialData }) => {
  // Render the current section conditionally, allowing natural height
  return (
    <div className="w-full min-h-[500px]">
      {selectedSection === 'about' && <AboutSection data={initialData.about} />}
      {selectedSection === 'experience' && <ExperienceSection data={initialData.experience} />}
      {selectedSection === 'education' && <EducationSection data={initialData.education} />}
    </div>
  );
};

export default ContentSection;

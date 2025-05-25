'use client';

import React from 'react';
import { Timeline, Badge } from 'flowbite-react';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { EducationSectionData } from '@/components/types';
import { customComponents } from '@/theme/config';

interface EducationSectionProps {
  readonly data: EducationSectionData;
}

const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <SectionHeader icon={<FaGraduationCap />} title={data.title} />

      <Timeline className="border-l">
        {data.items.map((education, index) => (
          <Timeline.Item key={index} className="mb-8 md:mb-9 lg:mb-10 last:mb-0">
            <Timeline.Point icon={FaUniversity} />
            <Timeline.Content>
              <Timeline.Title className="text-lg md:text-[1.2rem] lg:text-xl font-bold text-foreground mb-2.5 md:mb-3 text-break-word">
                {education.institution}
              </Timeline.Title>

              <Badge
                color="info"
                size="sm"
                className={`mb-2.5 md:mb-3 tracking-wide text-break-word ${customComponents.educationBadge}`}
              >
                {education.degree}
              </Badge>

              <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                <FaCalendarAlt className="mr-1.5 md:mr-2 flex-shrink-0" />
                <span className="text-break-word">{education.duration}</span>
              </div>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default EducationSection;

'use client';

import React from 'react';
import { Timeline, Badge } from 'flowbite-react';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { EducationSectionData } from "@/components/types";



interface EducationSectionProps {
    readonly data: EducationSectionData;
}


const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <SectionHeader icon={<FaGraduationCap />} title={data.title} />

            <Timeline className="border-l border-gray-200">
                {data.items.map((education, index) => (
                    <Timeline.Item key={index} className="mb-8 last:mb-0">
                        <Timeline.Point icon={FaUniversity} />
                        <Timeline.Content>
                            <Timeline.Title className="text-xl font-bold text-gray-900 mb-3">
                                {education.institution}
                            </Timeline.Title>

                            <Badge color="info" className="mb-3">
                                {education.degree}
                            </Badge>

                            <div className="flex items-center text-sm text-gray-600">
                                <FaCalendarAlt className="mr-2" />
                                {education.duration}
                            </div>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );
};

export default EducationSection;
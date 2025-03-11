'use client';

import React from 'react';
import { Timeline, Badge } from 'flowbite-react';
import { FaBriefcase, FaBuilding, FaClock, FaAngleRight } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import {ExperienceSectionData} from "@/components/types";

interface ExperienceSectionProps {
    readonly data: ExperienceSectionData;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <SectionHeader icon={<FaBriefcase />} title={data.title} />

            <Timeline className="border-l border-gray-200">
                {data.companies.map((company, index) => (
                    <Timeline.Item key={index} className="mb-8 last:mb-0">
                        <Timeline.Point icon={FaBuilding} />
                        <Timeline.Content>
                            <Timeline.Title className="text-xl font-bold text-gray-900 flex items-center flex-wrap gap-2 mb-4">
                                {company.name}
                                <Badge color="info" icon={FaClock}>
                                    {company.totalDuration}
                                </Badge>
                            </Timeline.Title>

                            <div className="space-y-5">
                                {company.roles.map((role, roleIndex) => (
                                    <div
                                        key={roleIndex}
                                        className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm"
                                    >
                                        <h4 className="text-lg font-semibold text-blue-700 mb-3">
                                            {role.title}
                                        </h4>
                                        <ul className="space-y-2">
                                            {role.responsibilities.map((item, i) => (
                                                <li key={i} className="flex text-gray-700">
                                                    <FaAngleRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );
};

export default ExperienceSection;
'use client';

import React from 'react';
import { Timeline, Badge } from 'flowbite-react';
import { FaBriefcase, FaBuilding, FaClock } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { ExperienceSectionData } from '@/components/types';
import RoleCard from './RoleCard';

interface ExperienceSectionProps {
  readonly data: ExperienceSectionData;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <SectionHeader icon={<FaBriefcase />} title={data.title} />

      <Timeline className="border-l">
        {data.companies.map((company, index) => (
          <Timeline.Item key={index} className="mb-10 last:mb-0">
            <Timeline.Point icon={FaBuilding} />
            <Timeline.Content>
              <Timeline.Title className="text-xl font-bold text-foreground flex items-center flex-wrap gap-2 mb-4">
                {company.name}
                <Badge color="info" icon={FaClock}>
                  {company.totalDuration}
                </Badge>
              </Timeline.Title>

              <div className="space-y-5">
                {company.roles.map((role, roleIndex) => (
                  <RoleCard key={roleIndex} role={role} />
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

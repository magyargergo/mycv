'use client';

import React from 'react';
import { Timeline, Badge } from 'flowbite-react';
import { FaBriefcase, FaBuilding, FaClock, FaAngleRight } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { ExperienceSectionData } from '@/components/types';

interface ExperienceSectionProps {
  readonly data: ExperienceSectionData;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full">
      <SectionHeader icon={<FaBriefcase />} title={data.title} />

      <Timeline className="border-l border-border/70">
        {data.companies.map((company, index) => (
          <Timeline.Item
            key={index}
            className="mb-6 mobile-landscape:mb-4 tablet-landscape:mb-5 md:mb-8 lg:mb-10 last:mb-0 reduced-margin-landscape"
          >
            <Timeline.Point icon={FaBuilding} className="bg-secondary text-primary shadow-sm" />
            <Timeline.Content>
              <Timeline.Title className="text-base mobile-landscape:text-sm tablet-landscape:text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center flex-wrap gap-1.5 md:gap-2 mb-3 mobile-landscape:mb-2 tablet-landscape:mb-2.5 md:mb-4 lg:mb-5">
                <span className="text-break-word">{company.name}</span>
                <Badge
                  color="info"
                  size="xs"
                  icon={FaClock}
                  className="text-break-word shadow-sm mobile-landscape:text-[10px] mobile-landscape:py-0.5 mobile-landscape:px-1.5 md:text-xs"
                >
                  {company.totalDuration}
                </Badge>
              </Timeline.Title>

              <div className="space-y-4 mobile-landscape:space-y-2 tablet-landscape:space-y-3 md:space-y-5 lg:space-y-6">
                {company.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="mt-2 mobile-landscape:mt-1.5 tablet-landscape:mt-2 md:mt-3 p-2.5 mobile-landscape:p-2 tablet-landscape:p-2.5 md:p-3 lg:p-4 rounded-md bg-secondary/50 hover:bg-secondary"
                  >
                    <h4 className="text-sm mobile-landscape:text-xs tablet-landscape:text-sm md:text-base lg:text-lg font-semibold text-primary mb-2 mobile-landscape:mb-1.5 tablet-landscape:mb-2 md:mb-2.5 lg:mb-3 text-break-word tracking-tight">
                      {role.title}
                    </h4>
                    <ul className="space-y-1.5 mobile-landscape:space-y-1 tablet-landscape:space-y-1.5 md:space-y-2 lg:space-y-2.5">
                      {role.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-foreground text-xs mobile-landscape:text-[10px] tablet-landscape:text-xs md:text-[13px] lg:text-sm"
                        >
                          <FaAngleRight className="text-primary mr-1.5 mobile-landscape:mr-1 tablet-landscape:mr-1.5 md:mr-2 lg:mr-2.5 flex-shrink-0" />
                          <span className="text-break-word">{item}</span>
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

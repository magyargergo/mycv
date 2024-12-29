"use client";

import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { Timeline } from "../shared/Timeline/Timeline";
import { TimelineItem } from "../shared/Timeline/TimelineItem";
import { ExperienceContent } from "./types";
import CompanyContent from "./CompanyContent";

interface ExperienceSectionProps {
    data: ExperienceContent;
}

const Experience: React.FC<ExperienceSectionProps> = ({ data }) => {
    return (
        <SectionLayout
            id="experience"
            icon={<FaBriefcase />}
            title={data.title}
        >
            <Timeline>
                {data.companies.map((company, index) => (
                    <TimelineItem key={index}>
                        <CompanyContent company={company} />
                    </TimelineItem>
                ))}
            </Timeline>
        </SectionLayout>
    );
};

export default Experience;

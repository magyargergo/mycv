"use client";

import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { title, companies } from "../../data/experience.json";
import { SectionLayout } from "../shared/SectionLayout/SectionLayout";
import { Timeline } from "../shared/Timeline/Timeline";
import { TimelineItem } from "../shared/Timeline/TimelineItem";
import { ExperienceContent } from "./types";
import CompanyContent from "./CompanyContent";

const Experience: React.FC = () => {
    const experienceData: ExperienceContent = { title, companies };

    return (
        <SectionLayout
            id="experience"
            icon={<FaBriefcase />}
            title={experienceData.title}
        >
            <Timeline>
                {experienceData.companies.map((company, index) => (
                    <TimelineItem key={index}>
                        <CompanyContent company={company} />
                    </TimelineItem>
                ))}
            </Timeline>
        </SectionLayout>
    );
};

export default Experience;
